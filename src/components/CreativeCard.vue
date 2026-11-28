<script setup lang="ts">
import { computed } from 'vue'
import { useGalleryViewer } from '@/composables/useGalleryViewer'
import type { DesignProject } from '@/data/designProjects'

const props = defineProps<{ project: DesignProject }>()

const { open } = useGalleryViewer()
const cover = computed(() => props.project.images[0])
const tags = computed(() => props.project.tools)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <button
    v-if="cover"
    type="button"
    class="group block w-full border-2 border-soft p-2 text-left"
    :aria-label="`${project.title}, ${project.images.length} images`"
    @click="open(project, 0, $event.currentTarget as HTMLElement)"
  >
    <span
      class="relative block overflow-hidden bg-soft"
      :class="cover.video ? 'aspect-square' : ''"
    >
      <img
        :src="cover.src"
        :alt="cover.alt"
        loading="lazy"
        class="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
        :class="cover.video ? 'absolute inset-0 h-full object-cover' : 'h-auto'"
      />
      <video
        v-if="cover.video"
        :src="cover.video"
        :poster="cover.src"
        :autoplay="!reduceMotion"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsinline
        preload="metadata"
        tabindex="-1"
        aria-hidden="true"
      ></video>
      <span class="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
        <span class="text-ui bg-paper px-3 py-1.5 text-xs text-ink">{{ project.title }}</span>
        <span v-for="tag in tags" :key="tag" class="text-ui bg-ink px-3 py-1.5 text-xs text-paper">
          {{ tag }}
        </span>
      </span>
    </span>
  </button>
</template>
