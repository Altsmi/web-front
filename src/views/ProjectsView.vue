<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import { projectCardData } from '@/data/ProjectCardData'

const selectedSlug = ref<string | null>(null)

function openProject(slug: string) {
  selectedSlug.value = slug
}

function closeProject() {
  selectedSlug.value = null
}
</script>

<template>
  <!--About Header-->
  <section class="bg-neutral-300">
    <div class="max-w-7xl mx-auto py-20 px-6 md:pt-25 md:pb-10 transition-all duration-1000">
      <div class="flex flex-col justify-center gap-6 md:gap-8 w-full">
        <h1
          class="font-bold text-text-900 tracking-tight font-header text-6xl sm:text-6xl md:text-6xl"
        >
          PROJECTS
        </h1>
        <p class="text-xl sm:text-xl md:text-xl text-text-900 font-semibold">
          Design work, dev experiments, and everything in between.
        </p>
      </div>
    </div>
  </section>

  <!--Projects-->
  <section class="bg-neutral-300">
    <div class="max-w-7xl mx-auto py-10 px-6 md:py-10 transition-all duration-1000">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard
          v-for="card in projectCardData"
          :key="card.slug"
          :card="card"
          @click="openProject(card.slug)"
        />
      </div>
    </div>
  </section>

  <ProjectModal :selectedSlug="selectedSlug" @close="closeProject" />
</template>
