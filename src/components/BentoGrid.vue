<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'
import type { BentoImage } from '@/data/study'

defineProps<{ tiles: BentoImage[] }>()

const { open } = useLightbox()

// Full class names, so Tailwind can see them. Phone: 2 columns. Desktop: 6.
const colClass = {
  2: 'col-span-1 md:col-span-2',
  3: 'col-span-2 md:col-span-3',
  4: 'col-span-2 md:col-span-4',
  6: 'col-span-2 md:col-span-6',
} as const

const rowClass = { 1: 'row-span-1', 2: 'row-span-2', 3: 'row-span-3' } as const
</script>

<template>
  <ul class="grid auto-rows-[8rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-6 md:gap-5">
    <li v-for="tile in tiles" :key="tile.src" :class="[colClass[tile.cols], rowClass[tile.rows]]">
      <button
        type="button"
        :aria-label="`Enlarge image: ${tile.alt}`"
        class="border-line bg-soft block size-full overflow-hidden border"
        @click="open({ src: tile.src, alt: tile.alt })"
      >
        <img
          :src="tile.src"
          :alt="tile.alt"
          loading="lazy"
          class="size-full object-cover"
          :class="tile.top ? 'object-top' : 'object-center'"
        />
      </button>
    </li>
  </ul>
</template>
