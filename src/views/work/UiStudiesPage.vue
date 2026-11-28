<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ImageLightbox from '@/components/ImageLightbox.vue'
import Pill from '@/components/Pill.vue'
import SectionIndex from '@/components/SectionIndex.vue'
import UiStudySection from '@/components/UiStudySection.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { uiStudies } from '@/data/uiStudies'

const pills = ['Prototyping', 'Wireframing', 'Interaction design', 'Figma']

const indexItems = computed(() =>
  uiStudies.map((study) => ({
    id: study.id,
    label: `${String(study.number).padStart(2, '0')} ${study.title}`,
  })),
)

const { active } = useActiveSection(() => indexItems.value.map((item) => item.id))
</script>

<template>
  <article class="shell flex-1 space-y-16 pt-8 md:space-y-24 md:pt-16">
    <header class="space-y-8">
      <RouterLink to="/work" class="text-ui inline-block hover:text-accent">← All work</RouterLink>

      <div class="space-y-6">
        <p class="text-caption text-quiet">UX/UI · 2026 · INTERACTION DESIGN</p>
        <h1>UI Studies</h1>
        <p class="text-lead max-w-3xl">
          Small studies of single interface pieces, from wireframe to a working interaction. Each
          one has a problem, a decision and a short video.
        </p>
      </div>

      <ul class="rule-top flex flex-wrap gap-2 pt-6" aria-label="Skills">
        <Pill v-for="item in pills" :key="item">{{ item }}</Pill>
      </ul>
    </header>

    <div class="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
      <SectionIndex :items="indexItems" :active="active" label="Studies" />

      <div class="min-w-0 space-y-12 md:space-y-16">
        <UiStudySection v-for="study in uiStudies" :key="study.id" :study="study" />
      </div>
    </div>

    <nav
      aria-label="Project navigation"
      class="rule-top flex flex-wrap items-center justify-between gap-6 pt-6"
    >
      <RouterLink to="/work" class="text-ui hover:text-accent">← All work</RouterLink>
    </nav>

    <ImageLightbox />
  </article>
</template>
