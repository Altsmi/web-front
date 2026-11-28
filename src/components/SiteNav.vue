<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { label: 'Work', to: '/work', match: '/work' },
  { label: 'Creative', to: '/creative', match: '/creative' },
  { label: 'About', to: '/about', match: '/about' },
]

const current = computed(() => route.path)
const isActive = (match: string) => current.value === match || current.value.startsWith(`${match}/`)
</script>

<template>
  <header class="shell">
    <div
      class="rule-bottom flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-4 md:py-5"
    >
      <RouterLink to="/" aria-label="Home" class="shrink-0">
        <img src="/logo_classic.svg" alt="" class="h-9 w-auto md:h-12" />
      </RouterLink>

      <nav
        aria-label="Main"
        class="order-3 flex w-full items-center justify-between gap-6 md:order-none md:w-auto md:justify-start md:gap-9"
      >
        <RouterLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          :aria-current="isActive(item.match) ? 'page' : undefined"
          class="display-caps border-b-[3px] border-transparent pb-1 text-base tracking-[-0.01em] transition-colors hover:text-accent md:text-lg"
          :class="isActive(item.match) ? '!border-ink' : ''"
        >
          {{ item.label }}
        </RouterLink>
        <a
          href="/Illya_Shpylka_Resume_UX-UI.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="display-caps border-b-[3px] border-transparent pb-1 text-base tracking-[-0.01em] transition-colors hover:text-accent md:text-lg"
        >
          Resume
        </a>
      </nav>

      <a
        href="mailto:illya.shpylka@gmail.com?subject=Hello%20Illya"
        class="btn btn-solid max-md:px-4 max-md:py-2.5"
      >
        Say hello
      </a>
    </div>
  </header>
</template>
