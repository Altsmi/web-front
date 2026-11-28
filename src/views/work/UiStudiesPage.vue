<script setup lang="ts">
import { computed } from 'vue'
import CreativeCard from '@/components/CreativeCard.vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectStory from '@/components/ProjectStory.vue'
import type { DesignProject } from '@/data/designProjects'
import { uiStudies } from '@/data/uiStudies'
import { uxProjects, visibleProjects } from '@/data/uxProjects'

const project = computed(() => uxProjects.find((p) => p.slug === 'ui-studies'))

const next = computed(() => {
  if (visibleProjects.length < 2) return undefined
  const i = visibleProjects.findIndex((p) => p.slug === 'ui-studies')
  return visibleProjects[(i + 1) % visibleProjects.length]
})

// Each study is one card. The video is the preview and the first slide in the viewer,
// then come the wireframe, typography, grid and components images.
const studies: DesignProject[] = uiStudies.map((study) => ({
  slug: study.id,
  title: study.title,
  tools: ['Figma'],
  images: [
    { src: study.video.poster, video: study.video.src, alt: study.video.label },
    ...study.frames.map((frame) => ({ src: frame.src, alt: frame.alt })),
  ],
}))
</script>

<template>
  <article v-if="project" class="flex-1">
    <ProjectHero :project="project" />

    <div class="shell space-y-16 pt-16 pb-16 md:space-y-24 md:pt-24 md:pb-24">
      <ProjectStory :project="project" />

      <ul class="columns-1 gap-4 md:columns-2 md:gap-6">
        <li v-for="study in studies" :key="study.slug" class="mb-4 break-inside-avoid md:mb-6">
          <CreativeCard :project="study" />
        </li>
      </ul>
    </div>

    <ProjectFooter :next="next" />
    <ImageLightbox />
  </article>
</template>
