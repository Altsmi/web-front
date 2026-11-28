<script setup lang="ts">
import { useProjectLink } from '@/composables/useProjectLink'
import { projectPath, type Project } from '@/data/uxProjects'

const props = defineProps<{ project: Project }>()
const { tag, attrs } = useProjectLink(() => projectPath(props.project))
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    class="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b-2 border-ink py-6 transition-colors hover:bg-ink hover:text-paper md:grid-cols-[1fr_15rem_4rem_11.25rem] md:gap-x-8 md:px-0 md:py-6"
  >
    <h3 class="text-card col-span-2 md:col-span-1 md:px-4">{{ project.title }}</h3>
    <p class="text-caption uppercase">UX/UI · {{ project.kind ?? 'Project' }}</p>
    <p class="display-caps text-right md:text-left">{{ project.year }}</p>
    <div class="hidden aspect-180/110 overflow-hidden bg-soft md:block">
      <img :src="project.image" :alt="project.alt" class="h-full w-full object-cover" />
    </div>
  </component>
</template>
