<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

type Box = { left: number; top: number; width: number; height: number }

const { project, index, origin, getOriginEl, close, go, next, prev } = useGalleryViewer()

const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const thumbs = ref<HTMLElement | null>(null)
const flyerEl = ref<HTMLImageElement | null>(null)

/** What is on screen. Kept after close so the modal can fade out while the image flies home. */
const visible = ref(false)
const snap = ref<{ project: DesignProject } | null>(null)
const sp = computed(() => snap.value?.project ?? null)
const count = computed(() => sp.value?.images.length ?? 0)
const cur = computed(() => sp.value?.images[index.value] ?? null)
const multi = computed(() => count.value > 1)

/** Copy of the image that flies between the card and the modal. */
const flyer = ref<{ src: string; home: string | null; from: Box; ix: number; iy: number } | null>(
  null,
)
const flyerTop = ref<HTMLImageElement | null>(null)
/** The picture the card showed. Used so the flight ends on exactly what the card shows. */
let homeSrc = ''
const flying = ref(false)
/** Side text fades in after the image has started moving. */
const textIn = ref(false)

let opener: HTMLElement | null = null
let startX = 0
let flightId = 0
let textTimer = 0
let grainTimer = 0

/** Only the card's picture is hidden while it flies. Border and tags stay, so nothing pops back. */
function cardImage(): HTMLElement | null {
  const el = getOriginEl() as HTMLElement | null
  return el?.querySelector<HTMLElement>('img') ?? el
}

/** `currentSrc` is an absolute URL, `src` is a path. Compare them as URLs. */
function sameImage(a: string, b: string) {
  try {
    return new URL(a, location.href).href === new URL(b, location.href).href
  } catch {
    return a === b
  }
}

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const px = (b: Box) => ({
  left: `${b.left}px`,
  top: `${b.top}px`,
  width: `${b.width}px`,
  height: `${b.height}px`,
})

const sizes = new Map<string, { w: number; h: number }>()

function naturalSize(src: string) {
  const known = sizes.get(src)
  if (known) return Promise.resolve(known)
  return new Promise<{ w: number; h: number } | null>((resolve) => {
    const image = new Image()
    image.onload = () =>
      void image
        .decode()
        .catch(() => {})
        .then(() => {
          const size = { w: image.naturalWidth, h: image.naturalHeight }
          sizes.set(src, size)
          resolve(size)
        })
    image.onerror = () => resolve(null)
    image.src = src
  })
}

/** Where the image sits inside the stage (contain fit). */
async function modalImageBox(): Promise<Box | null> {
  const src = cur.value?.src
  const area = stage.value?.getBoundingClientRect()
  if (!src || !area) return null
  const size = await naturalSize(src)
  if (!size) return null
  const k = Math.min(area.width / size.w, area.height / size.h)
  const width = size.w * k
  const height = size.h * k
  return {
    left: area.left + (area.width - width) / 2,
    top: area.top + (area.height - height) / 2,
    width,
    height,
  }
}

/**
 * One flight, done with transform + clip-path only (runs on the GPU, no layout).
 * The flyer sits at the big box. The small state is a scaled, clipped copy placed over the card.
 */
function flightFrames(big: Box, small: Box) {
  const s = Math.max(small.width / big.width, small.height / big.height)
  const dx = small.left + small.width / 2 - (big.left + big.width / 2)
  const dy = small.top + small.height / 2 - (big.top + big.height / 2)
  const iy = Math.max(0, (big.height - small.height / s) / 2)
  const ix = Math.max(0, (big.width - small.width / s) / 2)
  return {
    ix,
    iy,
    small: {
      transform: `translate(${dx}px, ${dy}px) scale(${s})`,
      clipPath: `inset(${iy}px ${ix}px)`,
    },
    big: { transform: 'none', clipPath: 'inset(0px 0px)' },
  }
}

async function flyBetween(big: Box, small: Box, src: string, grow: boolean, duration: number) {
  const f = flightFrames(big, small)
  // Card picture and modal picture can differ (cover vs another image). Cross-fade so nothing snaps.
  const home = homeSrc && !sameImage(homeSrc, src) ? homeSrc : null
  flyer.value = { src, home, from: big, ix: f.ix, iy: f.iy }
  await nextTick()
  const easing = 'cubic-bezier(0.2, 0.8, 0.2, 1)'
  if (home && grow) {
    // Open: the viewer picture fades in over the card picture at the very start.
    flyerTop.value?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 140,
      easing: 'ease-out',
      fill: 'both',
    })
  }
  const swapOut =
    home && !grow
      ? flyerTop.value?.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 140,
          delay: Math.max(0, duration - 80),
          easing: 'ease-out',
          fill: 'both',
        })
      : undefined
  try {
    await flyerEl.value?.animate(grow ? [f.small, f.big] : [f.big, f.small], {
      duration,
      easing,
      fill: 'forwards',
    }).finished
  } catch {
    /* cancelled by a newer flight */
  }
  try {
    await swapOut?.finished
  } catch {
    /* cancelled */
  }
}

async function openFlight() {
  const id = ++flightId
  const from = origin.value
  origin.value = null
  homeSrc = from?.src ?? ''
  const originEl = cardImage()
  textIn.value = false
  window.clearTimeout(textTimer)

  if (!from || reduced()) {
    textIn.value = true
    return
  }
  flying.value = true
  await nextTick()
  const to = await modalImageBox()
  if (id !== flightId) return
  if (!to) {
    flying.value = false
    textIn.value = true
    return
  }
  if (originEl) originEl.style.visibility = 'hidden'
  textTimer = window.setTimeout(() => (textIn.value = true), 150)
  await flyBetween(to, from.rect, cur.value?.src ?? from.src, true, 400)
  if (id !== flightId) return
  // Hand over: show the real image first, then fade the copy out on top of it.
  flying.value = false
  await nextTick()
  try {
    await flyerEl.value?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 120,
      fill: 'forwards',
    }).finished
  } catch {
    /* cancelled */
  }
  if (id !== flightId) return
  flyer.value = null
}

async function closeFlight() {
  const id = ++flightId
  window.clearTimeout(textTimer)
  textIn.value = false
  const originEl = cardImage()
  const home = originEl?.isConnected ? originEl.getBoundingClientRect() : null
  const from = reduced() || !home || home.width === 0 ? null : await modalImageBox()
  const src = cur.value?.src

  if (!from || !home || !src) {
    visible.value = false
    flyer.value = null
    flying.value = false
    if (originEl) originEl.style.visibility = ''
    return
  }
  flying.value = true
  window.setTimeout(() => {
    if (id === flightId) visible.value = false
  }, 50)
  await flyBetween(
    from,
    { left: home.left, top: home.top, width: home.width, height: home.height },
    src,
    false,
    300,
  )
  if (id !== flightId) return
  // Hand over: show the real card picture first, then fade the copy out on top of it.
  if (originEl) originEl.style.visibility = ''
  try {
    await flyerEl.value?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 120,
      fill: 'forwards',
    }).finished
  } catch {
    /* cancelled */
  }
  if (id !== flightId) return
  flyer.value = null
  flying.value = false
}

/** Click on the dark area around the picture closes. Click on the picture itself does not. */
function onStageClick(event: MouseEvent) {
  const area = stage.value?.getBoundingClientRect()
  const size = cur.value ? sizes.get(cur.value.src) : undefined
  if (!area || !size) return close()
  const k = Math.min(area.width / size.w, area.height / size.h)
  const w = size.w * k
  const h = size.h * k
  const left = area.left + (area.width - w) / 2
  const top = area.top + (area.height - h) / 2
  const inside =
    event.clientX >= left &&
    event.clientX <= left + w &&
    event.clientY >= top &&
    event.clientY <= top + h
  if (!inside) close()
}

function trapFocus(event: KeyboardEvent) {
  const items = dialog.value?.querySelectorAll<HTMLElement>('button')
  if (!items || !items.length) return
  const first = items[0]
  const last = items[items.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
  else if (event.key === 'Tab') trapFocus(event)
}

function onTouchStart(event: TouchEvent) {
  startX = event.changedTouches[0]?.clientX ?? 0
}

function onTouchEnd(event: TouchEvent) {
  const dx = (event.changedTouches[0]?.clientX ?? 0) - startX
  if (Math.abs(dx) < 50) return
  if (dx < 0) next()
  else prev()
}

watch(project, async (value) => {
  if (value) {
    opener = document.activeElement as HTMLElement | null
    snap.value = { project: value }
    for (const image of value.images) void naturalSize(image.src)
    visible.value = true
    document.body.style.overflow = 'hidden'
    window.clearTimeout(grainTimer)
    grainTimer = window.setTimeout(() => document.body.classList.add('viewer-open'), 260)
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    void openFlight()
    closeButton.value?.focus()
  } else {
    document.body.style.overflow = ''
    window.clearTimeout(grainTimer)
    document.body.classList.remove('viewer-open')
    window.removeEventListener('keydown', onKeydown)
    void closeFlight()
    opener?.focus()
    opener = null
  }
})

watch(index, async () => {
  await nextTick()
  thumbs.value
    ?.querySelector('[aria-current="true"]')
    ?.scrollIntoView({ inline: 'center', block: 'nearest' })
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.body.classList.remove('viewer-open')
  window.removeEventListener('keydown', onKeydown)
  window.clearTimeout(textTimer)
  const originEl = cardImage()
  if (originEl) originEl.style.visibility = ''
  close()
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible && sp && cur"
        ref="dialog"
        role="dialog"
        aria-modal="true"
        :aria-label="sp.title"
        class="fixed inset-0 z-50 text-paper"
      >
        <div class="absolute inset-0 bg-ink/95" aria-hidden="true" @click="close"></div>

        <!-- Image: as big as the screen allows, never cropped. Click empty space to close. -->
        <div
          ref="stage"
          class="absolute inset-x-4 top-28 bottom-32 md:inset-x-[6vw] md:top-36 md:bottom-36"
          @click="onStageClick"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <Transition
            enter-active-class="transition-opacity duration-200 ease-in-out motion-reduce:transition-none"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-200 ease-in-out motion-reduce:transition-none"
            leave-to-class="opacity-0"
          >
            <img
              :key="cur.src"
              :src="cur.src"
              :alt="cur.alt"
              class="pointer-events-none absolute inset-0 h-full w-full object-contain"
              :class="flying ? 'opacity-0' : ''"
            />
          </Transition>
        </div>

        <!-- Title and close -->
        <div
          class="pointer-events-none absolute inset-x-4 top-5 flex items-start justify-between gap-6 transition-opacity duration-300 ease-in-out motion-reduce:transition-none md:inset-x-12 md:top-7"
          :class="textIn ? 'opacity-100' : 'opacity-0'"
        >
          <div>
            <h2 class="max-w-[22ch] text-2xl leading-[0.95] tracking-[-0.03em] md:text-4xl">
              {{ sp.title }}
            </h2>
            <p class="text-caption mt-2 hidden text-line md:block">
              {{ sp.tools.join(' · ') }}
            </p>
          </div>
          <button
            ref="closeButton"
            type="button"
            aria-label="Close"
            class="pointer-events-auto flex size-11 shrink-0 items-center justify-center border-2 border-ink bg-paper text-lg font-extrabold text-ink transition-colors duration-150 hover:bg-ink hover:text-paper hover:outline-2 hover:outline-paper"
            @click="close"
          >
            ✕
          </button>
        </div>

        <!-- Floating dock -->
        <div
          class="absolute inset-x-0 bottom-5 flex justify-center px-3 transition-opacity duration-300 ease-in-out motion-reduce:transition-none md:bottom-7"
          :class="textIn ? 'opacity-100' : 'opacity-0'"
        >
          <div
            v-if="multi"
            class="flex max-w-full items-center gap-3 border border-paper/50 bg-paper/15 p-3 backdrop-blur-xl md:gap-4"
          >
            <button
              type="button"
              aria-label="Previous image"
              class="text-ui shrink-0 px-1 text-2xl transition-colors duration-150 hover:text-accent"
              @click="prev"
            >
              ←
            </button>
            <ul ref="thumbs" class="flex min-w-0 gap-2 overflow-x-auto">
              <li v-for="(image, i) in sp.images" :key="image.src" class="shrink-0">
                <button
                  type="button"
                  :aria-label="`Show image ${i + 1} of ${count}`"
                  :aria-current="i === index ? 'true' : undefined"
                  class="block border-[3px] transition-[opacity,border-color] duration-200"
                  :class="
                    i === index ? 'border-paper' : 'border-transparent opacity-55 hover:opacity-100'
                  "
                  @click="go(i)"
                >
                  <img :src="image.src" alt="" class="h-15 w-12 object-cover" />
                </button>
              </li>
            </ul>
            <button
              type="button"
              aria-label="Next image"
              class="text-ui shrink-0 px-1 text-2xl transition-colors duration-150 hover:text-accent"
              @click="next"
            >
              →
            </button>
            <p class="text-ui shrink-0 pl-1 text-base" aria-live="polite">
              {{ String(index + 1).padStart(2, '0') }} / {{ String(count).padStart(2, '0') }}
            </p>
          </div>
          <p v-else class="text-ui text-xs text-line">Esc to close</p>
        </div>
      </div>
    </Transition>

    <!-- The flying image lives outside the overlay, so it does not fade with it -->
    <div
      v-if="flyer"
      ref="flyerEl"
      class="pointer-events-none fixed z-60 will-change-[transform,clip-path]"
      :style="px(flyer.from)"
    >
      <img
        v-if="flyer.home"
        :src="flyer.home"
        alt=""
        class="absolute object-cover"
        :style="{
          left: `${flyer.ix}px`,
          top: `${flyer.iy}px`,
          width: `calc(100% - ${flyer.ix * 2}px)`,
          height: `calc(100% - ${flyer.iy * 2}px)`,
        }"
      />
      <img ref="flyerTop" :src="flyer.src" alt="" class="absolute inset-0 size-full object-cover" />
    </div>
  </Teleport>
</template>
