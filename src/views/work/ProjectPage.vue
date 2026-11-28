<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ImageLightbox from '@/components/ImageLightbox.vue'
import PhaseSection from '@/components/PhaseSection.vue'
import StudyOverview from '@/components/StudyOverview.vue'
import ZoomImage from '@/components/ZoomImage.vue'
import { uxProjects, visibleProjects } from '@/data/uxProjects'

const props = defineProps<{ slug: string }>()

const project = computed(() => uxProjects.find((p) => p.slug === props.slug))

const next = computed(() => {
  if (visibleProjects.length < 2) return undefined
  const i = visibleProjects.findIndex((p) => p.slug === props.slug)
  return visibleProjects[(i + 1) % visibleProjects.length]
})

const eyebrow = computed(() => {
  const p = project.value
  if (!p) return ''
  return ['UX/UI', p.year, p.type?.toUpperCase()].filter(Boolean).join(' · ')
})

const facts = computed(() => {
  const p = project.value
  if (!p) return []
  return [
    { label: 'Role', value: p.role },
    { label: 'Timeline', value: p.timeline },
    { label: 'Tools', value: p.tools.join(', ') },
    { label: 'Type', value: p.type },
  ].filter((fact) => Boolean(fact.value))
})
</script>

<template>
  <article v-if="project" class="shell flex-1 space-y-16 pt-8 md:space-y-24 md:pt-16">
    <header class="space-y-8">
      <RouterLink to="/work" class="text-ui inline-block hover:text-accent">← All work</RouterLink>

      <div class="space-y-6">
        <p class="text-caption text-quiet">{{ eyebrow }}</p>
        <h1 class="text-hero">{{ project.title }}</h1>
        <p class="text-lead max-w-3xl">{{ project.summary }}</p>
      </div>

      <dl class="rule-top grid grid-cols-2 gap-x-6 gap-y-6 pt-6 md:grid-cols-4 md:gap-x-8">
        <div v-for="fact in facts" :key="fact.label" class="space-y-1">
          <dt class="text-ui text-quiet text-sm">{{ fact.label }}</dt>
          <dd class="display-caps text-lg leading-tight tracking-[-0.02em] md:text-xl">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </header>

    <ZoomImage :src="project.image" :alt="project.alt" cover />

    <div class="space-y-16 md:space-y-24">
      <StudyOverview
        v-if="project.overview"
        :overview="project.overview"
        :glance="project.glance"
        :decisions="project.decisions"
      />
      <PhaseSection v-for="phase in project.phases" :key="phase.id" :phase="phase" />
    </div>

    <nav
      aria-label="Project navigation"
      class="rule-top flex flex-wrap items-center justify-between gap-6 pt-6"
    >
      <RouterLink to="/work" class="text-ui hover:text-accent">← All work</RouterLink>
      <RouterLink v-if="next" :to="`/work/ux-ui/${next.slug}`" class="text-ui hover:text-accent">
        Next project: {{ next.title }} →
      </RouterLink>
    </nav>

    <ImageLightbox />
  </article>
</template>
