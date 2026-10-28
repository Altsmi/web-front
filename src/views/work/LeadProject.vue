<script setup lang="ts">
import Pill from '@/components/Pill.vue'
import { useProjectLink } from '@/composables/useProjectLink'
import { projectPath, type Project } from '@/data/uxProjects'

const props = defineProps<{ project: Project }>()
const { tag, attrs, isExternal } = useProjectLink(() => projectPath(props.project))
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    class="group grid gap-6 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-project-accents md:grid-cols-[3fr_2fr] md:items-center md:gap-8 lg:gap-12"
  >
    <!-- Image -->
    <img
      :src="project.image"
      :alt="project.alt"
      class="w-full border border-project-dividers transition-opacity group-hover:opacity-90 rounded"
    />

    <!-- Text -->
    <div class="space-y-6">
      <div class="space-y-3">
        <p class="text-caption text-project-labels">FEATURED · {{ project.year }}</p>
        <h2>{{ project.title }}</h2>
        <p class="max-w-md">{{ project.summary }}</p>
      </div>

      <ul class="flex flex-wrap gap-2.5">
        <Pill v-for="skill in project.tags" :key="skill">{{ skill }}</Pill>
      </ul>

      <span
        class="text-ui block underline underline-offset-4 transition-colors group-hover:text-project-accents"
      >
        View case study {{ isExternal ? '↗' : '→' }}
      </span>
    </div>
  </component>
</template>
