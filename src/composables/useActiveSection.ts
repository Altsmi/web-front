import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(getIds: () => string[]) {
  const active = ref('')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const ids = getIds()
    active.value = ids[0] ?? ''

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { active }
}
