import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export function useProjectLink(getLink: () => string | undefined) {
  const isExternal = computed(() => /^https?:\/\//.test(getLink() ?? ''))

  const tag = computed(() => {
    if (!getLink()) return 'div'
    return isExternal.value ? 'a' : RouterLink
  })

  const attrs = computed(() => {
    const link = getLink()
    if (!link) return {}
    if (isExternal.value) return { href: link, target: '_blank', rel: 'noopener noreferrer' }
    return { to: link }
  })

  return { tag, attrs, isExternal }
}
