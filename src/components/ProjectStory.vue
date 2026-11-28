<script setup lang="ts">
import Pill from '@/components/Pill.vue'
import type { Project } from '@/data/uxProjects'

defineProps<{ project: Project }>()
</script>

<template>
  <section
    v-if="project.story?.length"
    aria-labelledby="the-project"
    class="rule-top grid gap-6 pt-6 md:grid-cols-2 md:gap-12"
  >
    <h2 id="the-project" class="text-card">The project</h2>
    <div class="space-y-6">
      <p v-for="line in project.story" :key="line" class="text-lead text-quiet">{{ line }}</p>
      <div
        v-if="project.services?.length"
        class="border-line grid gap-2 border-t pt-6 md:grid-cols-[8rem_minmax(0,1fr)]"
      >
        <p class="text-quiet text-sm">Services</p>
        <ul class="flex flex-wrap gap-2">
          <Pill v-for="service in project.services" :key="service">{{ service }}</Pill>
        </ul>
      </div>
    </div>
  </section>
</template>
