<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
const { isVisible: skillVisible, sectionRef: skillRef } = useScrollReveal(0.3)
</script>
<template>
  <div
    class="space-y-3 transition-all duration-1000"
    ref="skillRef"
    :class="skillVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div
      class="p-10 bg-neutral-300 border-3 border-neutral-300 hover:border-3 hover:border-brand-primary transition-discrete duration-300"
    >
      <div class="flex flex-row items-center gap-6">
        <slot name="icon"></slot>
        <h3 class="text-2xl text-text-900 font-bold"><slot name="tool"></slot></h3>
      </div>
    </div>
  </div>
</template>
