<script setup lang="ts">
import type { Block } from '@/data/blocks'
import FactsBlock from './FactsBlock.vue'
import ImagesBlock from './ImagesBlock.vue'
import PhaseBlock from './PhaseBlock.vue'
import StatsBlock from './StatsBlock.vue'
import TableBlock from './TableBlock.vue'
import TextBlock from './TextBlock.vue'

defineProps<{ blocks: Block[] }>()
</script>

<template>
  <div class="space-y-10 md:space-y-14">
    <template v-for="(block, index) in blocks" :key="index">
      <PhaseBlock v-if="block.type === 'phase'" :block="block" class="pt-6 md:pt-10" />
      <TextBlock v-else-if="block.type === 'text'" :block="block" />
      <FactsBlock v-else-if="block.type === 'facts'" :block="block" />
      <StatsBlock v-else-if="block.type === 'stats'" :block="block" />
      <ImagesBlock v-else-if="block.type === 'images'" :block="block" />
      <TableBlock v-else-if="block.type === 'table'" :block="block" />
    </template>
  </div>
</template>
