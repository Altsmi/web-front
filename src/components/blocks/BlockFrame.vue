<script setup lang="ts">
import ZoomImage from '@/components/ZoomImage.vue'
import type { ImageItem } from '@/data/blocks'

defineProps<{
  heading?: string
  wide?: boolean
  image?: ImageItem
}>()
</script>

<template>
  <!-- Full width, no label column -->
  <section v-if="wide" class="space-y-6 border-project-dividers pt-8">
    <h3 v-if="heading" class="text-lead">{{ heading }}</h3>
    <slot />
  </section>

  <!-- Text left, image right -->
  <section
    v-else-if="image"
    class="grid gap-8 border-project-dividers pt-8 lg:grid-cols-2 lg:gap-12"
  >
    <div class="min-w-0 space-y-6">
      <h3 v-if="heading" class="text-lead">{{ heading }}</h3>
      <slot />
    </div>
    <div class="lg:sticky lg:top-8 lg:self-start">
      <ZoomImage :src="image.src" :alt="image.alt" :caption="image.caption" />
    </div>
  </section>

  <!-- Label column + content -->
  <section
    v-else
    class="grid gap-4 border-t border-project-dividers pt-8 md:grid-cols-[12rem_1fr] md:gap-50 lg:grid-cols-[16rem_1fr]"
  >
    <h3 v-if="heading" class="text-lead">{{ heading }}</h3>
    <div v-else class="hidden md:block" aria-hidden="true"></div>
    <div class="min-w-0 space-y-6">
      <slot />
    </div>
  </section>
</template>
