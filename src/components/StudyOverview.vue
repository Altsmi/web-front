<script setup lang="ts">
import type { Glance, Overview } from '@/data/study'

defineProps<{
  overview?: Overview
  glance?: Glance[]
}>()
</script>

<template>
  <section id="summary" class="scroll-mt-20 space-y-8 lg:scroll-mt-8">
    <header class="border-t-2 border-project-text pt-4">
      <h2>Summary</h2>
    </header>

    <dl v-if="overview" class="divide-y divide-project-dividers border-y border-project-dividers">
      <div class="grid gap-2 py-5 md:grid-cols-[9rem_1fr] md:gap-8">
        <dt class="text-ui text-project-labels">Challenge</dt>
        <dd class="max-w-prose">{{ overview.challenge }}</dd>
      </div>
      <div class="grid gap-2 py-5 md:grid-cols-[9rem_1fr] md:gap-8">
        <dt class="text-ui text-project-labels">Solution</dt>
        <dd class="max-w-prose">{{ overview.solution }}</dd>
      </div>
      <div class="grid gap-2 py-5 md:grid-cols-[9rem_1fr] md:gap-8">
        <dt class="text-ui text-project-labels">Result</dt>
        <dd class="max-w-prose">{{ overview.result }}</dd>
      </div>
    </dl>

    <ul
      v-if="glance?.length"
      class="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-x-6 gap-y-8"
    >
      <li
        v-for="item in glance"
        :key="item.label"
        class="space-y-2 border-t border-project-dividers pt-4"
      >
        <p class="text-[2.5rem] leading-none font-bold md:text-[3.5rem]">{{ item.value }}</p>
        <p class="text-ui">{{ item.label }}</p>
      </li>
    </ul>
  </section>
</template>
