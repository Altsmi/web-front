<script setup lang="ts">
import BlockFrame from './BlockFrame.vue'
import type { FactsData } from '@/data/blocks'

defineProps<{ block: FactsData }>()
</script>

<template>
  <BlockFrame :heading="block.heading" :image="block.image">
    <p v-if="block.intro" class="max-w-prose">{{ block.intro }}</p>
    <dl class="divide-y divide-project-dividers border-y border-project-dividers">
      <div
        v-for="item in block.items"
        :key="item.label"
        class="grid gap-2 py-5"
        :class="block.image ? '' : 'lg:grid-cols-[14rem_1fr] lg:gap-8'"
      >
        <dt class="text-ui text-project-labels">{{ item.label }}</dt>
        <dd class="max-w-prose">{{ item.text }}</dd>
      </div>
    </dl>
  </BlockFrame>
</template>
