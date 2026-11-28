<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ZoomImage from '@/components/ZoomImage.vue'
import type { Project } from '@/data/uxProjects'

const props = defineProps<{ project: Project }>()

// Name size: up to 140px, shrinking so a long name still fits on one line.
const titleSize = computed(() => {
  const max = Math.max(80, Math.min(140, Math.floor(1280 / (props.project.title.length * 0.6))))
  return `clamp(2.5rem, 9.7vw, ${max / 16}rem)`
})

const facts = computed(() =>
  [
    { label: 'Role', value: props.project.role },
    { label: 'Timeline', value: props.project.timeline },
    { label: 'Tools', value: props.project.tools.join(', ') },
    { label: 'Type', value: props.project.type },
  ].filter((fact) => Boolean(fact.value)),
)
</script>

<template>
  <section
    class="text-paper border-paper border-b-2 bg-[radial-gradient(ellipse_80%_100%_at_50%_45%,#2e353d_0%,#1c2024_60%,#121417_100%)]"
  >
    <div class="shell pt-4 pb-0 md:pt-6">
      <RouterLink
        to="/work"
        aria-label="Back to all work"
        class="display-caps inline-block text-3xl leading-none hover:text-accent"
      >
        ←
      </RouterLink>
      <div class="relative isolate mx-auto mt-4 max-w-280 md:mt-6">
        <div
          class="absolute inset-0 -z-10 opacity-30 blur-[100px]"
          :style="{ backgroundColor: project.glow ?? '#8cb2f2' }"
          aria-hidden="true"
        ></div>
        <div class="mask-[linear-gradient(to_bottom,black_52%,transparent_100%)]">
          <ZoomImage :src="project.image" :alt="project.alt" />
        </div>
      </div>
      <h1
        class="text-hero pointer-events-none relative z-10 mt-[-0.55em] pb-2 leading-[0.85] normal-case"
        :style="{ fontSize: titleSize }"
      >
        {{ project.title }}
      </h1>
    </div>
  </section>

  <div class="shell pt-8">
    <dl class="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-8">
      <div v-for="fact in facts" :key="fact.label" class="space-y-1">
        <dt class="text-ui text-quiet text-xs">{{ fact.label }}</dt>
        <dd class="display-caps text-lg leading-tight tracking-[-0.02em] md:text-xl">
          {{ fact.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>
