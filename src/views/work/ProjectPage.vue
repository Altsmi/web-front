<script setup lang="ts">
import { computed } from 'vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import PhaseSection from '@/components/PhaseSection.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectStory from '@/components/ProjectStory.vue'
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

// Images per row -> grid columns (full class names so Tailwind can see them).
const rowCols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
}
</script>

<template>
  <article v-if="project" class="flex-1">
    <ProjectHero :project="project" />

    <div class="shell space-y-16 pt-16 pb-16 md:space-y-24 md:pt-24 md:pb-24">
      <ProjectStory :project="project" />

      <section
        v-for="group in project.showcase"
        :key="group.title"
        :aria-labelledby="`show-${group.title}`"
        class="rule-top space-y-6 pt-6 md:space-y-8"
      >
        <h2 :id="`show-${group.title}`" class="text-card">{{ group.title }}</h2>
        <div
          v-for="(row, index) in group.rows"
          :key="index"
          class="grid items-start gap-3 md:gap-5"
          :class="rowCols[row.length] ?? rowCols[1]"
        >
          <ZoomImage v-for="image in row" :key="image.src" :src="image.src" :alt="image.alt" />
        </div>
      </section>

      <StudyOverview
        v-if="project.overview"
        :overview="project.overview"
        :glance="project.glance"
        :decisions="project.decisions"
      />
      <PhaseSection v-for="phase in project.phases" :key="phase.id" :phase="phase" />
    </div>

    <ProjectFooter :next="next" />
    <ImageLightbox />
  </article>
</template>
