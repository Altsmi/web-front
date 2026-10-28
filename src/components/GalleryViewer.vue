<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'

const { project, index, count, current, close, go, next, prev } = useGalleryViewer()

const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const thumbs = ref<HTMLElement | null>(null)
let opener: HTMLElement | null = null
let startX = 0

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
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    closeButton.value?.focus()
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
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
  close()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="project && current"
      ref="dialog"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
      class="fixed inset-0 z-50 flex flex-col bg-project-bg"
    >
      <!-- Top bar -->
      <header
        class="flex items-start justify-between gap-6 border-b border-project-dividers px-4 py-4 md:px-10"
      >
        <div class="min-w-0 space-y-1">
          <h2 class="text-card-title">{{ project.title }}</h2>
          <p class="font-sans text-[0.8125rem] text-project-muted">
            {{ project.tools.join(' · ')
            }}<template v-if="project.year"> · {{ project.year }}</template>
          </p>
        </div>
        <div class="flex shrink-0 items-center gap-4 md:gap-6">
          <p v-if="count > 1" class="text-ui" aria-live="polite">{{ index + 1 }} / {{ count }}</p>
          <button
            ref="closeButton"
            type="button"
            class="text-ui rounded border-3 bg-project-bg border-project-text px-4 py-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents hover:bg-project-cards hover:border-project-dividers hover:text-project-accents transition-all duration-150"
            @click="close"
          >
            Close ✕
          </button>
        </div>
      </header>

      <!-- Image + arrows -->
      <div
        class="relative min-h-0 flex-1"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <img
          :key="current.src"
          :src="current.src"
          :alt="current.alt"
          class="absolute inset-0 h-full w-full object-contain p-4 md:px-24 md:py-6"
        />
        <template v-if="count > 1">
          <button
            type="button"
            aria-label="Previous image"
            class="text-ui rounded absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center border-3 border-project-text bg-project-bg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents md:left-6 hover:bg-project-cards hover:border-project-dividers hover:text-project-accents transition-all duration-150"
            @click="prev"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            class="text-ui absolute rounded top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center border-3 border-project-text bg-project-bg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents md:right-6 hover:bg-project-cards hover:border-project-dividers hover:text-project-accents transition-all duration-150"
            @click="next"
          >
            →
          </button>
        </template>
      </div>

      <!-- Caption + thumbnails -->
      <footer class="space-y-4 border-t border-project-dividers px-4 py-4 md:px-10">
        <div v-if="current.caption || project.description" class="space-y-1">
          <p v-if="current.caption" class="text-ui text-project-labels">{{ current.caption }}</p>
          <p v-if="project.description" class="max-w-prose text-[0.9375rem]">
            {{ project.description }}
          </p>
        </div>

        <ul v-if="count > 1" ref="thumbs" class="flex gap-2 overflow-x-auto pb-1">
          <li v-for="(image, i) in project.images" :key="image.src" class="shrink-0">
            <button
              type="button"
              :aria-label="`Show image ${i + 1} of ${count}`"
              :aria-current="i === index ? 'true' : undefined"
              class="block border-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
              :class="
                i === index
                  ? 'border-project-accents'
                  : 'border-transparent opacity-60 hover:opacity-100'
              "
              @click="go(i)"
            >
              <img :src="image.src" alt="" class="size-14 object-cover md:size-16" />
            </button>
          </li>
        </ul>
      </footer>
    </div>
  </Teleport>
</template>
