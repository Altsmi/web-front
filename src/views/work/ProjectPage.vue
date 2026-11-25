<script setup lang="ts">
import { computed } from 'vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import PhaseSection from '@/components/PhaseSection.vue'
import Pill from '@/components/Pill.vue'
import SectionIndex from '@/components/SectionIndex.vue'
import StudyOverview from '@/components/StudyOverview.vue'
import ZoomImage from '@/components/ZoomImage.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { uxProjects } from '@/data/uxProjects'

const props = defineProps<{ slug: string }>()

const project = computed(() => uxProjects.find((p) => p.slug === props.slug))

const next = computed(() => {
  if (uxProjects.length < 2) return undefined
  const i = uxProjects.findIndex((p) => p.slug === props.slug)
  return uxProjects[(i + 1) % uxProjects.length]
})

const pills = computed(() => {
  const p = project.value
  if (!p) return []
  return [p.role, p.timeline, ...p.tools, p.type].filter((item): item is string => Boolean(item))
})

const indexItems = computed(() => {
  const p = project.value
  if (!p) return []
  const phases = p.phases.map((phase) => ({
    id: phase.id,
    label: phase.number ? `${String(phase.number).padStart(2, '0')} ${phase.title}` : phase.title,
  }))
  return p.overview ? [{ id: 'summary', label: 'Summary' }, ...phases] : phases
})

const { active } = useActiveSection(() => indexItems.value.map((item) => item.id))
</script>

<template>
  <template v-if="project">
    <header class="border-b border-project-dividers">
      <div class="flex items-center justify-between gap-6 px-4 py-6 md:px-10 lg:px-20">
        <RouterLink
          to="/"
          aria-label="Home"
          class="shrink-0 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          <img src="/logo_classic.svg" alt="" class="h-16 w-auto" />
        </RouterLink>
        <RouterLink
          to="/#ux-ui"
          class="text-ui underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          ← All work
        </RouterLink>
      </div>
    </header>

    <article class="px-4 py-10 md:px-10 md:py-16 lg:px-20">
      <header class="space-y-8">
        <ZoomImage :src="project.image" :alt="project.alt" cover />

        <div class="grid gap-6 md:grid-cols-[3fr_2fr] md:items-end md:gap-12">
          <div class="space-y-4">
            <p class="text-lead text-project-labels">UX / UI & PRODUCT</p>
            <h1>{{ project.title }}</h1>
            <p class="text-lead max-w-prose">{{ project.summary }}</p>
          </div>

          <ul class="flex flex-wrap gap-2 md:justify-end" aria-label="Project facts">
            <Pill v-for="item in pills" :key="item">{{ item }}</Pill>
          </ul>
        </div>
      </header>

      <div class="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
        <SectionIndex :items="indexItems" :active="active" />

        <div class="min-w-0 space-y-12 md:space-y-16">
          <StudyOverview
            v-if="project.overview"
            :overview="project.overview"
            :glance="project.glance"
            :decisions="project.decisions"
          />
          <PhaseSection v-for="phase in project.phases" :key="phase.id" :phase="phase" />
        </div>
      </div>

      <nav
        aria-label="Project navigation"
        class="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-project-dividers pt-8"
      >
        <RouterLink
          to="/#ux-ui"
          class="text-ui underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          ← Back to UX / UI
        </RouterLink>
        <RouterLink
          v-if="next"
          :to="`/work/ux-ui/${next.slug}`"
          class="text-ui underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          Next project: {{ next.title }} →
        </RouterLink>
      </nav>

      <ImageLightbox />
    </article>
  </template>
</template>
