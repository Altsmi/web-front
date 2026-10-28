<script setup lang="ts">
import BlockFrame from './BlockFrame.vue'
import type { StatsData } from '@/data/blocks'

defineProps<{ block: StatsData }>()
</script>

<template>
  <BlockFrame :heading="block.heading" :image="block.image">
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-6 gap-y-8">
      <li
        v-for="item in block.items"
        :key="item.label"
        class="space-y-2 md:border-r border-t border-project-dividers pt-4"
      >
        <p class="text-[2.5rem] leading-none font-bold md:text-[3.5rem]">{{ item.value }}</p>
        <p class="text-ui">{{ item.label }}</p>
        <p v-if="item.note" class="max-w-prose font-sans text-[0.8125rem] text-project-muted">
          {{ item.note }}
        </p>
      </li>
    </ul>
    <p v-if="block.note" class="font-sans text-[0.8125rem] text-project-muted">{{ block.note }}</p>
  </BlockFrame>
</template>
