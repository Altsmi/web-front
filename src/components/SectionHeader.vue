<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  linkLabel?: string
  to?: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 md:gap-6">
    <h2 class="text-section shrink-0">{{ title }}</h2>
    <span class="h-0.5 flex-1 bg-ink" aria-hidden="true"></span>
    <RouterLink
      v-if="to && linkLabel"
      :to="to"
      class="display-caps shrink-0 text-sm tracking-[-0.01em] transition-colors hover:text-accent md:text-lg"
    >
      {{ linkLabel }}
    </RouterLink>
  </div>
</template>
