<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/SectionHeader.vue'
import CreativeTile from '@/components/CreativeTile.vue'
import WorkCard from '@/components/WorkCard.vue'
import { aboutStatement, aboutIntro, background } from '@/data/about'
import { designProjects } from '@/data/designProjects'
import { visibleProjects } from '@/data/uxProjects'

// The four creative pieces shown on Home. Change the slugs to swap them.
const creativeSlugs = ['edit-poster', 'swift_branding', 'arcane-branding', 'flower-poster']
const creative = creativeSlugs
  .map((slug) => designProjects.find((p) => p.slug === slug))
  .filter((p) => p !== undefined)
</script>

<template>
  <div class="shell flex-1 space-y-24 pt-10 md:space-y-32 md:pt-24">
    <!-- Hero -->
    <section
      aria-labelledby="hero-title"
      class="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,26rem)] xl:items-end xl:gap-12"
    >
      <h1
        id="hero-title"
        class="text-[clamp(3.5rem,14.2vw,15.6rem)] leading-[0.95] tracking-[-0.03em]"
      >
        <span class="block">Illya-</span>
        <span class="block">Shpylka</span>
      </h1>

      <div class="space-y-6 xl:pb-2">
        <p class="text-ui">UX/UI designer</p>
        <p class="text-lead">
          I’m based in Toronto. I come from graphic design, so I care about how things look, and I
          test how they work.
        </p>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/work" class="btn btn-solid">View work</RouterLink>
          <a
            href="/Illya_Shpylka_Resume_UX-UI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline"
          >
            Resume
          </a>
        </div>
        <p class="text-ui flex flex-wrap justify-between gap-x-6 gap-y-1 pt-2 text-sm">
          <span>Toronto, ON</span>
          <span>Open to work</span>
          <span>2026</span>
        </p>
      </div>
    </section>

    <!-- UX/UI work -->
    <section class="space-y-8 md:space-y-10">
      <SectionHeader title="UX/UI work:" link-label="All work →" to="/work" />
      <ul class="grid gap-12 md:grid-cols-2 md:gap-8">
        <li v-for="project in visibleProjects" :key="project.slug">
          <WorkCard :project="project" />
        </li>
      </ul>
    </section>

    <!-- Creative work -->
    <section class="space-y-8 md:space-y-10">
      <SectionHeader title="Creative work:" link-label="Full grid →" to="/creative" />
      <ul class="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
        <li v-for="project in creative" :key="project.slug">
          <CreativeTile :project="project" crop />
        </li>
      </ul>
    </section>

    <!-- About -->
    <section
      aria-labelledby="about-title"
      class="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] md:gap-16"
    >
      <img
        src="/Illya.jpeg"
        alt="Illya Shpylka"
        class="aspect-420/572 w-full bg-soft object-cover"
      />
      <div class="space-y-8">
        <h2 id="about-title" class="text-statement">{{ aboutStatement }}</h2>
        <p class="text-lead max-w-3xl">{{ aboutIntro[0] }}</p>
        <ul class="rule-top">
          <li
            v-for="row in background.slice(0, 3)"
            :key="row.title"
            class="grid grid-cols-[6rem_1fr] items-baseline gap-4 border-b border-line py-4 md:grid-cols-[8rem_1fr]"
          >
            <span class="text-caption text-quiet uppercase">{{ row.label }}</span>
            <span class="font-medium">{{ row.title }}, {{ row.meta }}</span>
          </li>
        </ul>
        <RouterLink to="/about" class="btn btn-outline">More about me</RouterLink>
      </div>
    </section>
  </div>
</template>
