<script setup lang="ts">
import type { Card } from '@/models/ProjectCardModel'

interface Prop {
  card: Card
}
const props = defineProps<Prop>()

defineEmits<{ click: [] }>()

import { useScrollReveal } from '@/composables/useScrollReveal'
const { isVisible: projectVisible, sectionRef: projectRef } = useScrollReveal(0.3)
</script>

<template>
  <div
    class="rounded-sm relative overflow-hidden aspect-square group cursor-pointer transition-all duration-1000"
    @click="$emit('click')"
    ref="projectRef"
    :class="projectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <img :src="props.card.previewImg" :alt="props.card.title" class="w-full h-full object-cover" />

    <div
      class="absolute bottom-0 left-0 w-full bg-neutral-900 text-neutral-300 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-10 py-10"
    >
      <h3 class="text-2xl font-bold pb-2">{{ props.card.title }}</h3>
      <p class="text-xl font-medium text-brand-primary">{{ props.card.category }}</p>
    </div>
  </div>
</template>
