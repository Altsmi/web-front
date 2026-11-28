<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { aboutIntro, aboutStatement, background, principles, tools } from '@/data/about'
</script>

<template>
  <div class="shell flex-1 space-y-20 pt-10 md:space-y-28 md:pt-24">
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

    <!-- How I work -->
    <section class="space-y-8">
      <SectionHeader title="How I work:" />
      <ul class="grid gap-10 md:grid-cols-3 md:gap-10">
        <li v-for="item in principles" :key="item.title" class="space-y-3">
          <h3 class="text-card leading-none!">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
      <div class="flex flex-wrap items-center gap-3 pt-2">
        <span class="text-ui">Tools:</span>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="tool in tools"
            :key="tool"
            class="text-ui border-2 border-ink px-4 py-1.5 text-sm"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
