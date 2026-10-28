<script setup lang="ts">
import type { PhaseData } from '@/data/blocks'

defineProps<{ block: PhaseData }>()
</script>

<template>
  <header class="flex items-baseline gap-4 border-t-2 border-project-muted pt-6 md:gap-8">
    <span
      v-if="block.number"
      class="text-display leading-none text-project-accents"
      aria-hidden="true"
    >
      {{ String(block.number).padStart(2, '0') }}
    </span>
    <h2>{{ block.title }}</h2>
  </header>
</template>
