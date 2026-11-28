<script setup lang="ts">
import { computed } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

const props = defineProps<{
  project: DesignProject
  /** Fixed 3:4 crop for grids. Without it the image keeps its own shape. */
  crop?: boolean
}>()

const { open } = useGalleryViewer()
const cover = computed(() => props.project.images[0])
const count = computed(() => props.project.images.length)
</script>

<template>
  <article v-if="cover" class="group relative space-y-3">
    <div class="overflow-hidden bg-soft" :class="crop ? 'aspect-318/420' : ''">
      <img
        :src="cover.src"
        :alt="cover.alt"
        loading="lazy"
        class="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
        :class="crop ? 'h-full object-cover' : 'h-auto'"
      />
    </div>

    <h3 class="text-card-title">
      <button
        type="button"
        class="text-left uppercase after:absolute after:inset-0"
        @click="open(project)"
      >
        {{ project.title }}
        <span v-if="count > 1" class="sr-only">, {{ count }} images</span>
      </button>
    </h3>

    <p class="text-caption text-quiet">
      {{ project.tools.join(' · ') }}
    </p>
  </article>
</template>
