<script setup lang="ts">
import DesignTile from '@/components/DesignTile.vue'
import GalleryViewer from '@/components/GalleryViewer.vue'
import { designProjects } from '@/data/designProjects'
</script>

<template>
  <section class="space-y-8 px-4 py-10 md:space-y-10 md:px-10 md:py-16 lg:px-20">
    <h1 class="sr-only">Graphic & Editorial</h1>
    <p class="text-lead text-project-labels">02 / GRAPHIC & EDITORIAL</p>

    <ul class="grid items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="project in designProjects" :key="project.slug">
        <DesignTile :project="project" />
      </li>
    </ul>

    <GalleryViewer />
  </section>
</template>
