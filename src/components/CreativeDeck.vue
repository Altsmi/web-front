<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

const props = defineProps<{ projects: DesignProject[] }>()

const { open } = useGalleryViewer()

const count = computed(() => props.projects.length)
const active = ref(0)
const stage = ref<HTMLElement | null>(null)
const leaving = ref<number | null>(null)
let busy = false
let timer: ReturnType<typeof setTimeout> | undefined

const current = computed(() => props.projects[active.value])

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** 0 = front, 1 and 2 = behind it, 3+ = tucked away at the bottom of the deck */
function position(index: number) {
  return (index - active.value + count.value) % count.value
}

// Where each card sits. x and y are % of the card's own size.
const slots = [
  { x: 0, y: 0, opacity: 1, shade: 0, z: 30 },
  { x: 12.8, y: -4.5, opacity: 1, shade: 0.22, z: 20 },
  { x: 25.6, y: -8.7, opacity: 1, shade: 0.5, z: 10 },
  { x: 25.6, y: -8.7, opacity: 0, shade: 0.5, z: 0 },
]

// Drag state: the front card follows the pointer 1:1
const dragX = ref(0)
const dragging = ref(false)
const leaveDir = ref(-1)
const progress = computed(() => Math.min(Math.abs(dragX.value) / 120, 1))

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/** Cards behind move up one place while the front card is dragged or flying out. */
function slotFor(index: number) {
  const pos = Math.min(position(index), 3)
  const from = slots[pos]!
  const to = slots[Math.max(pos - 1, 0)]!
  const t = leaving.value !== null ? 1 : dragging.value && pos > 0 ? progress.value : 0
  return {
    x: lerp(from.x, to.x, t),
    y: lerp(from.y, to.y, t),
    opacity: lerp(from.opacity, to.opacity, t),
    shade: lerp(from.shade, to.shade, t),
    z: from.z,
  }
}

function cardStyle(index: number) {
  if (index === leaving.value) {
    return {
      transform: `translate(${leaveDir.value * 55}%, 4%) rotate(${leaveDir.value * 7}deg)`,
      zIndex: 40,
    }
  }
  if (position(index) === 0 && dragging.value) {
    return {
      transform: `translate(${dragX.value}px, 0) rotate(${dragX.value / 25}deg)`,
      zIndex: 40,
      transition: 'none',
    }
  }
  const slot = slotFor(index)
  return {
    transform: `translate(${slot.x}%, ${slot.y}%)`,
    opacity: slot.opacity,
    zIndex: slot.z,
    transition: dragging.value ? 'none' : undefined,
  }
}

const shade = (index: number) => slotFor(index).shade

/** Front card flies out, then the deck re-orders and it drops to the back. */
function goTo(target: number, dir = -1) {
  if (busy || target === active.value) return
  busy = true
  dragX.value = 0
  if (reduceMotion()) {
    active.value = target
    busy = false
    return
  }
  leaveDir.value = dir
  leaving.value = active.value
  timer = setTimeout(() => {
    active.value = target
    leaving.value = null
    timer = setTimeout(() => (busy = false), 450)
  }, 170)
}

function openFront() {
  const card = stage.value?.querySelector<HTMLElement>(`[data-front="true"]`)
  open(current.value!, 0, card)
}

const next = (dir = -1) => goTo((active.value + 1) % count.value, dir)
const prev = () => goTo((active.value - 1 + count.value) % count.value)

function onCard(index: number, event: MouseEvent) {
  if (dragged) return
  if (position(index) === 0) open(props.projects[index]!, 0, event.currentTarget as HTMLElement)
  else goTo(index)
}

// Drag the front card with the mouse or a finger. Let go past the threshold and it goes
// to the back of the deck. Let go early and it springs back.
let startX = 0
let lastX = 0
let lastT = 0
let velocity = 0
let tracking = false
let dragged = false

function onPointerDown(event: PointerEvent) {
  if (busy || event.button > 0) return
  tracking = true
  dragged = false
  startX = lastX = event.clientX
  lastT = performance.now()
  velocity = 0
}

function onPointerMove(event: PointerEvent) {
  if (!tracking) return
  const dx = event.clientX - startX
  if (!dragging.value) {
    if (Math.abs(dx) < 6) return
    dragging.value = true
    dragged = true
    ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  }
  const now = performance.now()
  if (now > lastT) velocity = (event.clientX - lastX) / (now - lastT)
  lastX = event.clientX
  lastT = now
  dragX.value = dx
}

function onPointerUp() {
  if (!tracking) return
  tracking = false
  if (!dragging.value) return
  const dx = dragX.value
  const flick = Math.abs(velocity) > 0.6 && Math.abs(dx) > 30
  dragging.value = false
  setTimeout(() => (dragged = false), 0)
  if (Math.abs(dx) > 80 || flick) next(dx < 0 ? -1 : 1)
  else dragX.value = 0
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div
    v-if="current"
    class="grid items-center gap-10 lg:grid-cols-[minmax(0,628fr)_minmax(0,584fr)] lg:gap-x-32"
  >
    <!-- Deck -->
    <div
      class="relative mx-auto aspect-628/686 w-full max-w-[40rem] touch-pan-y select-none lg:mx-0"
      ref="stage"
      role="group"
      aria-roledescription="carousel"
      aria-label="Creative work"
      tabindex="0"
      @keydown="onKeydown"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <button
        v-for="(project, index) in projects"
        :key="project.slug"
        type="button"
        class="absolute top-[8.75%] left-0 block h-[90.4%] w-[79.6%] overflow-hidden border-2 border-ink bg-soft text-left transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none"
        :style="cardStyle(index)"
        :aria-label="position(index) === 0 ? `Open ${project.title}` : `Show ${project.title}`"
        :inert="position(index) > 2"
        :data-front="position(index) === 0 ? 'true' : undefined"
        @click="onCard(index, $event)"
      >
        <img
          :src="project.cover ?? project.images[0]?.src"
          :alt="position(index) === 0 ? (project.images[0]?.alt ?? '') : ''"
          draggable="false"
          class="h-full w-full object-cover"
        />
        <span
          class="pointer-events-none absolute inset-0 bg-paper transition-opacity duration-500 motion-reduce:transition-none"
          :style="{ opacity: shade(index) }"
          aria-hidden="true"
        ></span>
        <span
          class="pointer-events-none absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 transition-opacity duration-300"
          :class="position(index) === 0 && leaving !== index ? 'opacity-100' : 'opacity-0'"
          aria-hidden="true"
        >
          <span class="text-ui bg-paper px-3 py-1.5 text-xs text-ink">{{ project.title }}</span>
          <span
            v-for="tool in project.tools"
            :key="tool"
            class="text-ui bg-ink px-3 py-1.5 text-xs text-paper"
          >
            {{ tool }}
          </span>
        </span>
      </button>
    </div>

    <!-- Info for the front card -->
    <Transition name="fade" mode="out-in">
      <div :key="current.slug" class="space-y-5">
        <h3 class="text-statement">{{ current.title }}</h3>
        <p class="text-caption text-quiet">
          {{ current.tools.join(' · ')
          }}<template v-if="current.year"> · {{ current.year }}</template>
        </p>
        <p v-if="current.description" class="text-lead max-w-lg">{{ current.description }}</p>
        <button type="button" class="text-ui hover:text-accent" @click="openFront">
          View project →
        </button>
      </div>
    </Transition>

    <p class="sr-only" aria-live="polite">{{ current.title }}, {{ active + 1 }} of {{ count }}</p>
  </div>
</template>
