<script setup lang="ts">
import { computed } from 'vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import PhaseSection from '@/components/PhaseSection.vue'
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

const meta = computed(() => {
  const p = project.value
  if (!p) return []
  return [
    { label: 'Role', value: p.role },
    { label: 'Timeline', value: p.timeline },
    { label: 'Tools', value: p.tools.join(', ') },
    { label: 'Type', value: p.type },
  ].filter((item) => item.value)
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
  <article v-if="project" class="px-4 py-10 md:px-10 md:py-16 lg:px-20">
    <RouterLink
      to="/work/ux-ui"
      class="text-ui inline-block underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
    >
      ← Back to UX / UI
    </RouterLink>

    <header class="mt-10 grid gap-8 md:grid-cols-[3fr_2fr] md:items-center md:gap-8 lg:gap-12">
      <div class="order-2 md:order-1">
        <ZoomImage :src="project.image" :alt="project.alt" />
      </div>

      <div class="order-1 space-y-8 md:order-2">
        <div class="space-y-4">
          <p class="text-lead text-project-labels">01 / UX / UI & PRODUCT</p>
          <h1>{{ project.title }}</h1>
          <p class="text-lead max-w-md">{{ project.summary }}</p>
        </div>

        <dl class="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-project-dividers pt-6">
          <div v-for="item in meta" :key="item.label" class="space-y-1">
            <dt class="text-caption text-project-labels">{{ item.label.toUpperCase() }}</dt>
            <dd class="font-sans text-[0.9375rem]">{{ item.value }}</dd>
          </div>
        </dl>
      </div>
    </header>

    <!-- Body: side navigation + sections -->
    <div class="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
      <SectionIndex :items="indexItems" :active="active" />

      <div class="min-w-0 space-y-12 md:space-y-16">
        <StudyOverview
          v-if="project.overview"
          :overview="project.overview"
          :glance="project.glance"
        />
        <PhaseSection v-for="phase in project.phases" :key="phase.id" :phase="phase" />
      </div>
    </div>

    <nav
      aria-label="Project navigation"
      class="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-project-dividers pt-8"
    >
      <RouterLink
        to="/work/ux-ui"
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
