<script setup lang="ts">
import { computed } from 'vue'
import LeadProject from '@/views/work/LeadProject.vue'
import ProjectCard from '@/views/work/ProjectCard.vue'
import { uxProjects } from '@/data/uxProjects'

const lead = computed(() => uxProjects.find((p) => p.featured) ?? uxProjects[0])
const others = computed(() => uxProjects.filter((p) => p !== lead.value))
</script>

<template>
  <section
    id="ux-ui"
    class="scroll-mt-20 space-y-8 py-10 md:space-y-10 md:py-16 lg:pt-0 lg:scroll-mt-8"
  >
    <h2 class="sr-only">UX / UI & Product</h2>
    <p class="text-lead text-project-labels">01 / UX / UI & PRODUCT</p>

    <LeadProject v-if="lead" :project="lead" />

    <ul
      v-if="others.length"
      class="grid gap-x-6 gap-y-10 border-t border-project-dividers pt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="project in others" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>

    <p
      v-else-if="lead"
      class="border-t border-project-dividers pt-6 font-sans text-[0.9375rem] text-project-muted"
    >
      More case studies coming soon.
    </p>
  </section>
</template>
