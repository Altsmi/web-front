<script setup lang="ts">
import { computed } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

const props = defineProps<{ project: DesignProject }>()

const { open } = useGalleryViewer()
const cover = computed(() => props.project.images[0])
const tags = computed(() => props.project.tools)
</script>

<template>
  <button
    v-if="cover"
    type="button"
    class="group block w-full border-2 border-soft p-2 text-left"
    :aria-label="`${project.title}, ${project.images.length} images`"
    @click="open(project)"
  >
    <span class="relative block overflow-hidden bg-soft">
      <img
        :src="cover.src"
        :alt="cover.alt"
        loading="lazy"
        class="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <span class="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
        <span class="text-ui bg-paper px-3 py-1.5 text-xs text-ink">{{ project.title }}</span>
        <span v-for="tag in tags" :key="tag" class="text-ui bg-ink px-3 py-1.5 text-xs text-paper">
          {{ tag }}
        </span>
      </span>
    </span>
  </button>
</template>
