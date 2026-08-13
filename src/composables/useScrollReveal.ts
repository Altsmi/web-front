import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.2) {
  const isVisible = ref(false)
  const sectionRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )

    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { isVisible, sectionRef }
}
