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
const flyer = ref<{ src: string; from: Box } | null>(null)
const flying = ref(false)
/** Side text fades in after the image has started moving. */
const textIn = ref(false)

let opener: HTMLElement | null = null
let startX = 0
let flightId = 0
let textTimer = 0

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const px = (b: Box) => ({
  left: `${b.left}px`,
  top: `${b.top}px`,
  width: `${b.width}px`,
  height: `${b.height}px`,
})

function naturalSize(src: string) {
  return new Promise<{ w: number; h: number } | null>((resolve) => {
    const image = new Image()
    image.onload = () => resolve({ w: image.naturalWidth, h: image.naturalHeight })
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

/** One flight: the image grows or shrinks and travels in a single move. */
async function flyTo(from: Box, src: string, to: Box, duration: number) {
  flyer.value = { src, from }
  await nextTick()
  try {
    await flyerEl.value?.animate([px(from), px(to)], {
      duration,
      easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      fill: 'forwards',
    }).finished
  } catch {
    /* cancelled by a newer flight */
  }
}

async function openFlight() {
  const id = ++flightId
  const from = origin.value
  origin.value = null
  const originEl = getOriginEl() as HTMLElement | null
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
  await flyTo(from.rect, from.src, to, 400)
  if (id !== flightId) return
  flying.value = false
  flyer.value = null
}

async function closeFlight() {
  const id = ++flightId
  window.clearTimeout(textTimer)
  textIn.value = false
  const originEl = getOriginEl() as HTMLElement | null
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
  await flyTo(
    from,
    src,
    { left: home.left, top: home.top, width: home.width, height: home.height },
    300,
  )
  if (id !== flightId) return
  if (originEl) originEl.style.visibility = ''
  flyer.value = null
  flying.value = false
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
    visible.value = true
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    void openFlight()
    closeButton.value?.focus()
  } else {
    document.body.style.overflow = ''
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
  window.removeEventListener('keydown', onKeydown)
  window.clearTimeout(textTimer)
  const originEl = getOriginEl() as HTMLElement | null
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
        class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8"
      >
        <!-- Click outside to close -->
        <div class="absolute inset-0 bg-ink/85" aria-hidden="true" @click="close"></div>

        <div
          class="relative flex h-[92dvh] w-full flex-col overflow-hidden border-2 border-ink bg-paper md:flex-row"
          :class="
            multi
              ? 'md:h-[min(88vh,47.5rem)] md:w-[min(94vw,75.625rem)]'
              : 'md:h-[min(80vh,40rem)] md:w-[min(92vw,63rem)]'
          "
        >
          <!-- Image -->
          <div
            ref="stage"
            class="relative min-h-0 min-w-0 flex-1 bg-soft"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <!-- Cross-fade in place. Nothing slides. -->
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
                class="absolute inset-0 h-full w-full object-contain"
                :class="flying ? 'opacity-0' : ''"
              />
            </Transition>

            <template v-if="multi">
              <button
                type="button"
                aria-label="Previous image"
                class="absolute top-1/2 left-3 z-10 flex size-12 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper text-xl font-extrabold text-ink transition-colors duration-150 hover:bg-ink hover:text-paper md:left-4"
                @click="prev"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next image"
                class="absolute top-1/2 right-3 z-10 flex size-12 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper text-xl font-extrabold text-ink transition-colors duration-150 hover:bg-ink hover:text-paper md:right-4"
                @click="next"
              >
                →
              </button>
            </template>
          </div>

          <!-- Name and details (fades in, no slide) -->
          <aside
            class="flex max-h-[42dvh] min-h-0 shrink-0 flex-col gap-4 overflow-y-auto border-t-2 border-ink p-5 transition-opacity duration-300 ease-in-out motion-reduce:transition-none md:max-h-none md:border-t-0 md:border-l-2 md:p-8"
            :class="[
              multi ? 'md:w-[25.625rem]' : 'md:w-[23rem]',
              textIn ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div class="flex items-center justify-between gap-4">
              <p v-if="multi" class="text-ui text-lg" aria-live="polite">
                {{ String(index + 1).padStart(2, '0') }} / {{ String(count).padStart(2, '0') }}
              </p>
              <span v-else></span>
              <button
                ref="closeButton"
                type="button"
                aria-label="Close"
                class="flex size-11 shrink-0 items-center justify-center border-2 border-ink bg-paper text-lg font-extrabold transition-colors duration-150 hover:bg-ink hover:text-paper"
                @click="close"
              >
                ✕
              </button>
            </div>

            <h2 class="text-3xl leading-none tracking-[-0.03em] md:text-4xl">{{ sp.title }}</h2>
            <p class="text-caption text-quiet">
              {{ sp.tools.join(' · ') }}<template v-if="sp.year"> · {{ sp.year }}</template>
            </p>
            <p v-if="sp.description" class="text-lead">{{ sp.description }}</p>
            <p v-if="multi && cur.caption" class="text-ui text-xs text-quiet">
              {{ cur.caption }}
            </p>

            <div class="min-h-4 flex-1"></div>

            <ul v-if="multi" ref="thumbs" class="flex gap-2 overflow-x-auto pb-1">
              <li v-for="(image, i) in sp.images" :key="image.src" class="shrink-0">
                <button
                  type="button"
                  :aria-label="`Show image ${i + 1} of ${count}`"
                  :aria-current="i === index ? 'true' : undefined"
                  class="block border-[3px] transition-[opacity,border-color] duration-200"
                  :class="
                    i === index ? 'border-ink' : 'border-transparent opacity-60 hover:opacity-100'
                  "
                  @click="go(i)"
                >
                  <img :src="image.src" alt="" class="h-20 w-16 object-cover" />
                </button>
              </li>
            </ul>
            <p v-else class="text-caption hidden text-quiet md:block">Esc to close</p>
          </aside>
        </div>
      </div>
    </Transition>

    <!-- The flying image lives outside the modal, so it does not fade with it -->
    <img
      v-if="flyer"
      ref="flyerEl"
      :src="flyer.src"
      alt=""
      class="pointer-events-none fixed z-60 object-cover"
      :style="px(flyer.from)"
    />
  </Teleport>
</template>
