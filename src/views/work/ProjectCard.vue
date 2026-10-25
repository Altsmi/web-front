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
    class="group block focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-project-accents"
  >
    <div class="aspect-16/10 overflow-hidden border border-project-dividers">
      <img
        :src="project.image"
        :alt="project.alt"
        class="h-full w-full object-cover transition-opacity group-hover:opacity-90"
      />
    </div>
    <h3 class="text-card-title mt-4 transition-colors group-hover:text-project-accents">
      {{ project.title }}
    </h3>
    <p class="mt-1 font-sans text-[0.8125rem] text-project-muted">
      {{ project.year }} · {{ project.tags.slice(0, 2).join(' · ') }}
    </p>
  </component>
</template>
