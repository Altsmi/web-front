<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
const { isVisible: expVisible, sectionRef: expRef } = useScrollReveal(0.3)
</script>
<template>
  <div
    class="bg-neutral-300 px-10 py-10 space-y-3 transition-all duration-1000"
    ref="expRef"
    :class="expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <!--Position-->
    <h3 class="text-4xl text-brand-primary font-bold"><slot name="position"></slot></h3>
    <!--Year-->
    <p class="text-lg text-text-700"><slot name="year"></slot></p>
    <!--Description-->
    <ul class="text-text-900 pt-8 p-5 space-y-5 list-disc font-semibold">
      <slot name="description"></slot>
    </ul>
  </div>
</template>
