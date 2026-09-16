<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
const { isVisible: expVisible, sectionRef: expRef } = useScrollReveal(0.3)
</script>
<template>
  <div
    class="bg-neutral-300 px-4 py-6 sm:px-10 sm:py-10 space-y-3 transition-all duration-1000 rounded-sm"
    ref="expRef"
    :class="expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <h3 class="text-2xl sm:text-4xl text-brand-primary font-bold">
      <slot name="position"></slot>
    </h3>
    <p class="text-base sm:text-lg text-text-700"><slot name="year"></slot></p>
    <ul
      class="text-text-900 text-base sm:text-lg pt-4 sm:pt-8 p-5 sm:p-5 space-y-3 sm:space-y-5 list-disc font-semibold"
    >
      <slot name="description"></slot>
    </ul>
  </div>
</template>
