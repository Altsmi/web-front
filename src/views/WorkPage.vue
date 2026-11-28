<script setup lang="ts">
import WorkCard from '@/components/WorkCard.vue'
import { visibleProjects } from '@/data/uxProjects'
</script>

<template>
  <div class="shell flex-1 space-y-16 pt-10 pb-16 md:space-y-24 md:pt-24 md:pb-24">
    <header class="space-y-6">
      <h1 class="text-hero">Work</h1>
      <p class="text-lead max-w-3xl">
        My UX/UI projects. Each one has a full case study, from the problem to what I learned.
      </p>
    </header>

    <ul class="grid gap-12 md:grid-cols-2 md:gap-8">
      <li v-for="project in visibleProjects" :key="project.slug">
        <WorkCard :project="project" />
      </li>
    </ul>
  </div>
</template>
