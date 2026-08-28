<script setup lang="ts">
import type { Card } from '@/models/ProjectCardModel'

interface Prop {
  card: Card
}
const props = defineProps<Prop>()
</script>

<template>
  <div class="relative overflow-hidden aspect-square group cursor-pointer">
    <img :src="props.card.previewImg" :alt="props.card.title" class="w-full h-full object-cover" />

    <div
      class="absolute bottom-0 left-0 w-full bg-neutral-900 text-neutral-300 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-10 py-10"
    >
      <h3 class="text-2xl font-bold pb-2">{{ props.card.title }}</h3>
      <p class="text-xl font-medium text-brand-primary">{{ props.card.category }}</p>
    </div>
  </div>
</template>
