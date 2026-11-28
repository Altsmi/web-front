<script setup lang="ts">
import { useProjectLink } from '@/composables/useProjectLink'
import { projectPath, type Project } from '@/data/uxProjects'

const props = defineProps<{ project: Project }>()
const { tag, attrs, isExternal } = useProjectLink(() => projectPath(props.project))
</script>

<template>
  <component :is="tag" v-bind="attrs" class="group block space-y-4">
    <div class="aspect-656/420 overflow-hidden bg-soft">
      <img
        :src="project.image"
        :alt="project.alt"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>

    <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h3 class="text-card">{{ project.title }}</h3>
      <p v-if="project.kind" class="text-caption text-quiet uppercase">
        UX/UI · {{ project.kind }}
      </p>
    </div>

    <p class="max-w-xl">{{ project.summary }}</p>
    <p class="text-caption text-quiet">{{ project.tags.join(' · ') }}</p>

    <span
      class="text-ui inline-block underline decoration-2 underline-offset-4 group-hover:text-accent"
    >
      View case study {{ isExternal ? '↗' : '→' }}
    </span>
  </component>
</template>
