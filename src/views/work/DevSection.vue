<script setup lang="ts">
import Pill from '@/components/Pill.vue'
import { devProjects } from '@/data/devProjects'
</script>

<template>
  <section class="space-y-8 px-4 py-10 md:space-y-10 md:px-10 md:py-16 lg:px-20">
    <h1 class="sr-only">Front-end & Code</h1>
    <p class="text-lead text-project-labels">03 / FRONT-END & CODE</p>

    <ul class="border-t border-project-dividers">
      <li
        v-for="project in devProjects"
        :key="project.slug"
        class="grid gap-8 border-b border-project-dividers py-10 lg:grid-cols-2 lg:gap-12"
      >
        <div class="space-y-6">
          <div class="space-y-3">
            <p class="text-caption text-project-labels">
              {{ project.status.toUpperCase() }} · {{ project.year }}
            </p>
            <h2>{{ project.title }}</h2>
            <p class="max-w-md">{{ project.description }}</p>
          </div>

          <ul class="flex flex-wrap gap-2.5">
            <Pill v-for="item in project.stack" :key="item">{{ item }}</Pill>
          </ul>

          <a
            v-if="project.source"
            :href="project.source"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ui inline-block underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
          >
            View source on GitHub ↗
          </a>
        </div>

        <ul class="divide-y divide-project-dividers border-y border-project-dividers self-start">
          <li v-for="point in project.points" :key="point" class="py-4">{{ point }}</li>
        </ul>
      </li>
    </ul>

    <p class="font-sans text-[0.9375rem] text-project-muted">More builds will be added here.</p>
  </section>
</template>
