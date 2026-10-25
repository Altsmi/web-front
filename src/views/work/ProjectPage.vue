<script setup lang="ts">
import { computed } from 'vue'
import { uxProjects } from '@/data/uxProjects'

const props = defineProps<{ slug: string }>()

const project = computed(() => uxProjects.find((p) => p.slug === props.slug))

const next = computed(() => {
  if (uxProjects.length < 2) return undefined
  const i = uxProjects.findIndex((p) => p.slug === props.slug)
  return uxProjects[(i + 1) % uxProjects.length]
})

const meta = computed(() => {
  const p = project.value
  if (!p) return []
  return [
    { label: 'Role', value: p.role },
    { label: 'Timeline', value: p.timeline },
    { label: 'Tools', value: p.tools.join(', ') },
    { label: 'Type', value: p.type },
  ].filter((item) => item.value)
})
</script>

<template>
  <article v-if="project" class="px-4 py-10 md:px-10 md:py-16 lg:px-20">
    <RouterLink
      to="/work/ux-ui"
      class="text-ui inline-block underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
    >
      ← Back to UX / UI
    </RouterLink>

    <header class="mt-10 space-y-6">
      <p class="text-lead text-project-labels">01 / UX / UI & PRODUCT</p>
      <h1>{{ project.title }}</h1>
      <p class="text-lead max-w-2xl">{{ project.summary }}</p>
    </header>

    <dl class="mt-10 grid grid-cols-2 gap-6 border-y border-project-dividers py-6 md:grid-cols-4">
      <div v-for="item in meta" :key="item.label" class="space-y-1">
        <dt class="text-caption text-project-labels">{{ item.label.toUpperCase() }}</dt>
        <dd class="font-sans text-[0.9375rem]">{{ item.value }}</dd>
      </div>
    </dl>

    <img
      :src="project.image"
      :alt="project.alt"
      class="mt-10 aspect-16/10 w-full border border-project-dividers object-cover md:aspect-16/7"
    />

    <div class="mt-16 space-y-12 md:space-y-16">
      <section
        v-for="section in project.sections"
        :key="section.heading"
        class="grid gap-4 border-t border-project-dividers pt-8 md:grid-cols-[12rem_1fr] md:gap-10 lg:grid-cols-[16rem_1fr]"
      >
        <h2 class="text-lead">{{ section.heading }}</h2>
        <div class="space-y-8">
          <p class="max-w-prose">{{ section.text }}</p>
          <div
            v-if="section.images?.length"
            class="grid gap-6"
            :class="{ 'sm:grid-cols-2': section.images.length > 1 }"
          >
            <img
              v-for="img in section.images"
              :key="img.src"
              :src="img.src"
              :alt="img.alt"
              class="w-full border border-project-dividers"
            />
          </div>
        </div>
      </section>
    </div>

    <nav
      aria-label="Project navigation"
      class="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-project-dividers pt-8"
    >
      <RouterLink
        to="/work/ux-ui"
        class="text-ui underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
      >
        ← Back to UX / UI
      </RouterLink>
      <RouterLink
        v-if="next"
        :to="`/work/ux-ui/${next.slug}`"
        class="text-ui underline underline-offset-4 transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
      >
        Next project: {{ next.title }} →
      </RouterLink>
    </nav>
  </article>
</template>
