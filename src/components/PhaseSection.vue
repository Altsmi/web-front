<script setup lang="ts">
import ZoomImage from '@/components/ZoomImage.vue'
import BlockRenderer from '@/components/blocks/BlockRenderer.vue'
import type { Phase } from '@/data/study'

defineProps<{ phase: Phase }>()
</script>

<template>
  <section
    :id="phase.id"
    :aria-labelledby="`${phase.id}-title`"
    class="scroll-mt-20 space-y-6 lg:scroll-mt-8"
  >
    <header class="flex items-baseline gap-4 border-t-2 border-project-text pt-4 md:gap-6">
      <span
        v-if="phase.number"
        class="text-display leading-none text-project-accents"
        aria-hidden="true"
      >
        {{ String(phase.number).padStart(2, '0') }}
      </span>
      <h2 :id="`${phase.id}-title`">{{ phase.title }}</h2>
    </header>

    <!-- Main info card -->
    <div
      class="grid gap-6 border border-project-dividers bg-project-cards p-5 md:p-8 xl:gap-10"
      :class="phase.visual?.length ? 'xl:grid-cols-[3fr_2fr]' : ''"
    >
      <div class="min-w-0 space-y-6">
        <p class="text-lead max-w-prose">{{ phase.takeaway }}</p>
        <ul class="divide-y divide-project-dividers border-y border-project-dividers">
          <li v-for="point in phase.points" :key="point" class="py-3">{{ point }}</li>
        </ul>
      </div>

      <div v-if="phase.visual?.length" class="min-w-0 space-y-4">
        <ZoomImage
          v-for="image in phase.visual"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          :caption="image.caption"
        />
      </div>
    </div>

    <!-- Research dropdown -->
    <details
      v-if="phase.details.length"
      :open="phase.defaultOpen"
      class="group border-b border-project-dividers"
    >
      <summary
        class="text-ui flex cursor-pointer list-none items-center justify-between py-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents [&::-webkit-details-marker]:hidden"
      >
        {{ phase.detailsLabel ?? 'Research details' }}
        <span class="text-xl leading-none group-open:hidden" aria-hidden="true">+</span>
        <span class="hidden text-xl leading-none group-open:inline" aria-hidden="true">−</span>
      </summary>
      <div class="pt-2 pb-8">
        <BlockRenderer :blocks="phase.details" />
      </div>
    </details>
  </section>
</template>
