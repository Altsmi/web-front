<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'

const props = defineProps<{
  src: string
  alt: string
  caption?: string
  cover?: boolean
  tall?: boolean
}>()

const { open } = useLightbox()
</script>

<template>
  <figure class="space-y-3">
    <button
      type="button"
      :aria-label="`Enlarge image: ${props.alt}`"
      class="relative block w-full border border-project-dividers focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents rounded"
      :class="cover ? 'aspect-16/10 md:aspect-21/9' : tall ? 'aspect-4/3 overflow-hidden' : ''"
      @click="open({ src: props.src, alt: props.alt, tall: props.tall })"
    >
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        class="block w-full rounded"
        :class="cover ? 'h-full object-cover' : tall ? 'h-full object-cover object-top' : 'h-auto'"
      />
      <template v-if="tall">
        <span
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-project-bg to-transparent"
        ></span>
        <span
          class="text-caption absolute right-3 bottom-3 border border-project-dividers bg-project-bg px-2 py-1"
        >
          VIEW FULL PAGE ↗
        </span>
      </template>
    </button>
    <figcaption v-if="caption" class="font-sans text-[0.8125rem] text-project-muted">
      {{ caption }}
    </figcaption>
  </figure>
</template>
