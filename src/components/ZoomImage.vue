<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'

const props = defineProps<{
  src: string
  alt: string
  caption?: string
  cover?: boolean
}>()

const { open } = useLightbox()
</script>

<template>
  <figure class="space-y-3">
    <button
      type="button"
      :aria-label="`Enlarge image: ${props.alt}`"
      class="block w-full border border-project-dividers focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
      :class="cover ? 'aspect-16/10 md:aspect-21/9' : ''"
      @click="open({ src: props.src, alt: props.alt })"
    >
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        class="block w-full rounded"
        :class="cover ? 'h-full object-cover' : 'h-auto'"
      />
    </button>
    <figcaption v-if="caption" class="font-sans text-[0.8125rem] text-project-muted">
      {{ caption }}
    </figcaption>
  </figure>
</template>
