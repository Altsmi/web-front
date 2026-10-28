<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  { to: '/work/ux-ui', short: 'UX/UI', full: 'UX / UI & Product' },
  { to: '/work/design', short: 'Graphic', full: 'Graphic & Editorial' },
  { to: '/work/dev', short: 'Code', full: 'Front-end & Code' },
]
</script>

<template>
  <header class="border-b border-project-dividers">
    <div
      class="flex flex-col items-center gap-10 px-4 py-8 md:px-10 lg:flex-row lg:justify-between lg:gap-10 lg:px-20 lg:py-6"
    >
      <!-- Logo: back to landing -->
      <RouterLink
        to="/"
        aria-label="Home"
        class="shrink-0 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
      >
        <img src="/logo_classic.svg" alt="" class="h-22 w-auto md:h-22" />
      </RouterLink>

      <!-- Section links -->
      <nav aria-label="Projects">
        <ul class="flex items-center gap-5 md:gap-10 lg:gap-14">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              active-class="text-project-accents underline underline-offset-4"
              class="text-ui flex min-h-11 items-center uppercase transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
            >
              <span class="md:hidden">{{ link.short }}</span>
              <span class="hidden md:inline">{{ link.full }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
