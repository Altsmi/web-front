import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(getIds: () => string[]) {
  const active = ref('')
  let frame = 0

  function update() {
    frame = 0
    const ids = getIds()
    const line = window.innerHeight * 0.4
    let current = ''

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element && element.getBoundingClientRect().top <= line) current = id
    }

    active.value = current || ids[0] || ''
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    cancelAnimationFrame(frame)
  })

  return { active }
}
