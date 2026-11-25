<script setup lang="ts">
import { computed } from 'vue'
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
    <header class="grid gap-6 md:grid-cols-[3fr_2fr] md:items-end md:gap-12">
      <div class="space-y-4">
        <p class="text-lead text-project-labels">UX / UI & PRODUCT</p>
        <h1>UI Studies</h1>
        <p class="text-lead max-w-prose">
          Small studies of single interface pieces, from wireframe to a working interaction. Each
          one has a problem, a decision and a short video.
        </p>
      </div>

      <ul class="flex flex-wrap gap-2 md:justify-end" aria-label="Skills">
        <Pill v-for="item in pills" :key="item">{{ item }}</Pill>
      </ul>
    </header>

    <div class="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
      <SectionIndex :items="indexItems" :active="active" label="Studies" />

      <div class="min-w-0 space-y-12 md:space-y-16">
        <UiStudySection v-for="study in uiStudies" :key="study.id" :study="study" />
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
    </nav>

    <ImageLightbox />
  </article>
</template>
