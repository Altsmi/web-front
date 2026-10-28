import { ref } from 'vue'

export interface LightboxImage {
  src: string
  alt: string
}

const current = ref<LightboxImage | null>(null)

export function useLightbox() {
  function open(image: LightboxImage) {
    current.value = image
  }
  function close() {
    current.value = null
  }
  return { current, open, close }
}
