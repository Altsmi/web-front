<script setup lang="ts">
import { computed } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

const props = defineProps<{ project: DesignProject }>()

const { open } = useGalleryViewer()
const cover = computed(() => props.project.images[0])
const count = computed(() => props.project.images.length)
</script>

<template>
  <article v-if="cover" class="group relative">
    <div class="relative aspect-4/3 overflow-hidden border border-project-dividers">
      <img
        :src="cover.src"
        :alt="cover.alt"
        loading="lazy"
        class="absolute inset-0 h-full w-full transition-opacity group-hover:opacity-90"
        :class="project.fit === 'contain' ? 'bg-project-cards object-contain' : 'object-cover'"
      />
      <span
        v-if="count > 1"
        class="text-caption absolute right-3 bottom-3 bg-project-bg px-2 py-1"
        aria-hidden="true"
      >
        {{ count }} IMAGES
      </span>
    </div>

    <h3 class="text-card-title mt-4 transition-colors group-hover:text-project-accents">
      <button
        type="button"
        class="text-left after:absolute after:inset-0 focus-visible:after:outline-3 focus-visible:after:outline-offset-4 focus-visible:after:outline-project-accents"
        @click="open(project)"
      >
        {{ project.title }}
        <span v-if="count > 1" class="sr-only">, {{ count }} images</span>
      </button>
    </h3>

    <p class="mt-1 font-sans text-[0.8125rem] text-project-muted">
      {{ project.tools.join(' · ') }}<template v-if="project.year"> · {{ project.year }}</template>
    </p>
    <p v-if="project.description" class="mt-2 max-w-prose text-[0.9375rem]">
      {{ project.description }}
    </p>
  </article>
</template>
