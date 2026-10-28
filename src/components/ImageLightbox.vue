<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useLightbox } from '@/composables/useLightbox'

const { current, close } = useLightbox()
const closeButton = ref<HTMLButtonElement | null>(null)
let opener: HTMLElement | null = null

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(current, async (value) => {
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

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
  close()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="current"
      role="dialog"
      aria-modal="true"
      :aria-label="current.alt"
      class="fixed inset-0 z-50 flex items-center justify-center bg-project-text/90 p-4"
      @click="close"
    >
      <button
        ref="closeButton"
        type="button"
        class="text-ui absolute rounded top-4 right-4 border-3 border-project-dividers px-4 py-2 text-project-te bg-project-bg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        @click="close"
        @keydown.tab.prevent
      >
        ✕
      </button>
      <img
        :src="current.src"
        :alt="current.alt"
        class="max-h-full max-w-full object-contain rounded"
      />
    </div>
  </Teleport>
</template>
