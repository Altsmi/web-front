<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { uxResearchData } from '@/data/UxResearchData'

const route = useRoute()
const project = computed(() => uxResearchData.find((p) => p.slug === route.params.slug))
</script>

<template>
  <section v-if="project" class="bg-neutral-300">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <RouterLink
        to="/projects"
        class="inline-block w-full md:w-fit text-center rounded-sm bg-neutral-900 px-4 py-2 border-3 border-neutral-900 text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
      >
        < back
      </RouterLink>
      <h1 class="text-4xl font-bold">{{ project.title }}</h1>
      <p class="text-brand-primary text-lg pt-2 pb-8">{{ project.category }}</p>
      <img :src="project.previewImg" :alt="project.title" class="w-full rounded-sm" />
      <!--Project -->
    </div>
  </section>
</template>
