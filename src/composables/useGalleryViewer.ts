import { computed, ref } from 'vue'
import type { DesignProject } from '@/data/designProjects'

export interface ViewerOrigin {
  rect: { left: number; top: number; width: number; height: number }
  src: string
}

const project = ref<DesignProject | null>(null)
const index = ref(0)
/** Where the viewer image should fly in from. Set by open(), read once by the viewer. */
const origin = ref<ViewerOrigin | null>(null)
/** The clicked card. The viewer flies the image back to it on close. */
let originEl: Element | null = null
let pushed = false

function reset() {
  window.removeEventListener('popstate', reset)
  pushed = false
  project.value = null
}

export function useGalleryViewer() {
  const count = computed(() => project.value?.images.length ?? 0)
  const current = computed(() => project.value?.images[index.value] ?? null)

  /** `from` is the card that was clicked. Its image is where the viewer image flies in from. */
  function open(target: DesignProject, start = 0, from?: Element | null) {
    originEl = from ?? null
    const img = from?.querySelector('img') ?? (from instanceof HTMLImageElement ? from : null)
    const box = (img ?? from)?.getBoundingClientRect()
    origin.value =
      box && img && box.width > 0
        ? {
            rect: { left: box.left, top: box.top, width: box.width, height: box.height },
            src: img.currentSrc || img.src,
          }
        : null
    project.value = target
    index.value = start
    if (pushed) return
    history.pushState({ ...history.state, gallery: true }, '')
    window.addEventListener('popstate', reset)
    pushed = true
  }

  function close() {
    if (pushed) history.back()
    else project.value = null
  }

  function go(position: number) {
    if (!count.value) return
    index.value = (position + count.value) % count.value
  }

  function next() {
    go(index.value + 1)
  }

  function prev() {
    go(index.value - 1)
  }

  return {
    project,
    index,
    count,
    current,
    origin,
    getOriginEl: () => originEl,
    open,
    close,
    reset,
    go,
    next,
    prev,
  }
}
