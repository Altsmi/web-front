<script setup lang="ts">
import BlockFrame from './BlockFrame.vue'
import type { TextData } from '@/data/blocks'

defineProps<{ block: TextData }>()
</script>

<template>
  <BlockFrame :heading="block.heading" :image="block.image">
    <p v-for="(paragraph, index) in block.body" :key="index" class="max-w-prose">
      {{ paragraph }}
    </p>
  </BlockFrame>
</template>
