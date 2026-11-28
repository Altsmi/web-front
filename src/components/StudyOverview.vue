<script setup lang="ts">
import ZoomImage from '@/components/ZoomImage.vue'
import type { Decision, Glance, Overview } from '@/data/study'

defineProps<{
  overview?: Overview
  glance?: Glance[]
  decisions?: Decision[]
}>()
</script>

<template>
  <section id="summary" aria-label="Summary" class="space-y-12 md:space-y-16">
    <dl v-if="overview" class="rule-top grid gap-8 pt-6 md:grid-cols-3 md:gap-8">
      <div class="space-y-3">
        <dt class="text-ui text-quiet text-sm">Challenge</dt>
        <dd class="text-lead">{{ overview.challenge }}</dd>
      </div>
      <div class="space-y-3">
        <dt class="text-ui text-quiet text-sm">Solution</dt>
        <dd class="text-lead">{{ overview.solution }}</dd>
      </div>
      <div class="space-y-3">
        <dt class="text-ui text-quiet text-sm">Result</dt>
        <dd class="text-lead">{{ overview.result }}</dd>
      </div>
    </dl>

    <ul
      v-if="glance?.length"
      class="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]"
    >
      <li v-for="item in glance" :key="item.label" class="space-y-2 border-t-2 border-ink pt-4">
        <p class="display-caps text-4xl leading-none tracking-[-0.04em] md:text-6xl">
          {{ item.value }}
        </p>
        <p class="text-caption text-quiet">{{ item.label }}</p>
      </li>
    </ul>

    <div v-if="decisions?.length" class="space-y-6">
      <h2 class="text-section">Key decisions</h2>
      <ul class="grid gap-6 md:grid-cols-2">
        <li
          v-for="decision in decisions"
          :key="decision.title"
          class="space-y-6 border-2 border-ink p-5 md:p-8"
        >
          <div class="space-y-2">
            <p class="display-caps text-2xl leading-tight tracking-[-0.03em] md:text-3xl">
              {{ decision.title }}
            </p>
            <p class="text-lead">{{ decision.change }}</p>
          </div>
          <div class="grid gap-3" :class="decision.before ? 'grid-cols-2' : ''">
            <ZoomImage
              v-if="decision.before"
              :src="decision.before.src"
              :alt="decision.before.alt"
              :caption="decision.before.caption"
            />
            <ZoomImage
              :src="decision.after.src"
              :alt="decision.after.alt"
              :caption="decision.after.caption"
              :tall="decision.after.tall"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
