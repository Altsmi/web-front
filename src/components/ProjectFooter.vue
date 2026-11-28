<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projectPath, type Project } from '@/data/uxProjects'

defineProps<{ next?: Project }>()
</script>

<template>
  <nav aria-label="Project navigation" class="bg-ink text-paper border-ink border-t-2">
    <div class="shell flex flex-wrap items-center justify-between gap-6 py-10 md:py-16">
      <RouterLink to="/work" class="text-ui hover:text-accent">← Back to work</RouterLink>
      <RouterLink
        v-if="next"
        :to="projectPath(next)"
        :aria-label="`Next project: ${next.title}`"
        class="display-caps text-card leading-none hover:text-accent"
      >
        Next project →
      </RouterLink>
    </div>
  </nav>
</template>
