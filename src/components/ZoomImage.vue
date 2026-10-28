<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'

const props = defineProps<{
  src: string
  alt: string
  caption?: string
}>()

const { open } = useLightbox()
</script>

<template>
  <figure class="space-y-3">
    <button
      type="button"
      :aria-label="`Enlarge image: ${props.alt}`"
      class="block w-full border border-project-dividers focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
      @click="open({ src: props.src, alt: props.alt })"
    >
      <img :src="src" :alt="alt" loading="lazy" class="block h-auto w-full rounded" />
    </button>
    <figcaption v-if="caption" class="font-sans text-[0.8125rem] text-project-muted">
      {{ caption }}
    </figcaption>
  </figure>
</template>
