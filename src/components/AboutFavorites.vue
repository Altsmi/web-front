<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'

type Favorite = {
  label: string
  value: string
  image: string
  alt: string
}

// Images live in /public/about/
const favorites: Favorite[] = [
  {
    label: 'Favorite movie',
    value: 'Birdman',
    image: '/about/movie.jpg',
    alt: 'Birdman movie poster',
  },
  {
    label: 'Favorite song',
    value: 'Bottom',
    image: '/about/song.jpg',
    alt: 'Undertow album cover',
  },
  { label: 'My cat', value: 'Dexter', image: '/about/cat.jpg', alt: 'Dexter, my cat' },
]
</script>

<template>
  <section class="space-y-8">
    <SectionHeader title="A bit about me:" />
    <ul class="grid gap-8 md:grid-cols-3">
      <li v-for="item in favorites" :key="item.label" class="border-2 border-soft p-2 pb-5">
        <img
          :src="item.image"
          :alt="item.alt"
          class="aspect-4/3 w-full bg-soft object-cover"
          loading="lazy"
        />
        <div class="mt-4 space-y-2 px-3">
          <p class="text-caption not-italic text-quiet uppercase">{{ item.label }}</p>
          <p class="text-card leading-none!">{{ item.value }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
