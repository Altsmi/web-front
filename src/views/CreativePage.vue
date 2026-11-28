<script setup lang="ts">
import CreativeTile from '@/components/CreativeTile.vue'
import { designProjects } from '@/data/designProjects'
</script>

<template>
  <div class="shell flex-1 space-y-16 pt-10 md:space-y-24 md:pt-24">
    <header class="space-y-6">
      <h1>Creative work</h1>
      <p class="text-lead max-w-3xl">
        Graphic design, posters and brand work. The side of me that cares about type and layout.
      </p>
    </header>

    <ul class="columns-1 gap-8 sm:columns-2 lg:columns-3">
      <li v-for="project in designProjects" :key="project.slug" class="mb-10 break-inside-avoid">
        <CreativeTile :project="project" />
      </li>
    </ul>
  </div>
</template>
