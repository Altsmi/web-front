<script setup lang="ts">
import ZoomImage from '@/components/ZoomImage.vue'
import BlockFrame from './BlockFrame.vue'
import type { ImagesData } from '@/data/blocks'

defineProps<{ block: ImagesData }>()

const grid = {
  1: 'grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const
</script>

<template>
  <BlockFrame :heading="block.heading" wide>
    <ul class="grid gap-6" :class="grid[block.columns ?? 1]">
      <li v-for="image in block.items" :key="image.src">
        <ZoomImage :src="image.src" :alt="image.alt" :caption="image.caption" />
      </li>
    </ul>
  </BlockFrame>
</template>
