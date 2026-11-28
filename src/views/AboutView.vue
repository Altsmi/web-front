<script setup lang="ts">
import AboutFavorites from '@/components/AboutFavorites.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { aboutIntro, aboutStatement, background } from '@/data/about'
</script>

<template>
  <div class="shell flex-1 space-y-20 pt-10 pb-16 md:space-y-28 md:pt-24 md:pb-24">
    <header>
      <h1 class="text-hero">About</h1>
    </header>

    <!-- Intro -->
    <section class="grid gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,9fr)] md:gap-16">
      <img
        src="/Illya.jpeg"
        alt="Illya Shpylka"
        class="aspect-520/660 w-full bg-soft object-cover"
      />
      <div class="space-y-8">
        <h2 class="text-statement">{{ aboutStatement }}</h2>
        <p v-for="paragraph in aboutIntro" :key="paragraph" class="text-lead max-w-3xl">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <!-- Background -->
    <section class="space-y-8">
      <SectionHeader title="Background:" />
      <ul>
        <li
          v-for="row in background"
          :key="row.title"
          class="grid gap-1 border-b border-line py-6 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,22rem)] md:items-center md:gap-8"
        >
          <span class="text-caption text-quiet uppercase">{{ row.label }}</span>
          <span class="text-card-title text-2xl md:text-3xl">{{ row.title }}</span>
          <span class="text-quiet">{{ row.meta }}</span>
        </li>
      </ul>
    </section>

    <!-- Personal -->
    <AboutFavorites />
  </div>
</template>
