import { computed, ref } from 'vue'
import type { DesignProject } from '@/data/designProjects'

const project = ref<DesignProject | null>(null)
const index = ref(0)

export function useGalleryViewer() {
  const count = computed(() => project.value?.images.length ?? 0)
  const current = computed(() => project.value?.images[index.value] ?? null)

  function open(target: DesignProject, start = 0) {
    project.value = target
    index.value = start
  }

  function close() {
    project.value = null
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

  return { project, index, count, current, open, close, go, next, prev }
}
