<script setup lang="ts">
import SectionIndex from '@/components/SectionIndex.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import DesignSection from '@/views/work/DesignSection.vue'
import DevSection from '@/views/work/DevSection.vue'
import UxUiSection from '@/views/work/UxUiSection.vue'

const items = [
  { id: 'ux-ui', label: '01 UX / UI' },
  { id: 'design', label: '02 Graphic' },
  { id: 'dev', label: '03 Code' },
]

const { active } = useActiveSection(() => items.map((item) => item.id))
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <header class="border-b border-project-dividers">
      <div
        class="flex flex-col items-center gap-10 px-4 py-8 md:px-10 lg:flex-row lg:justify-between lg:gap-10 lg:px-20 lg:py-6"
      >
        <div class="flex shrink-0 items-center justify-center gap-3 md:gap-6">
          <picture class="shrink-0">
            <source media="(min-width: 768px)" srcset="/logo.svg" />
            <img src="/logo_classic.svg" alt="" class="h-22 w-auto md:h-auto" />
          </picture>
          <h1 class="text-display sr-only md:not-sr-only">Shpylka</h1>
        </div>

        <p class="text-lead w-full max-w-lg text-left">
          Hello! I’m a
          <span class="font-bold text-project-accents">Visual & Product Designer</span> with a
          5-year background in graphic design, typography, and interactive media.
        </p>
      </div>
    </header>

    <div class="flex-1 px-4 md:px-10 lg:px-20">
      <div class="grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12 lg:pt-16">
        <SectionIndex :items="items" :active="active" label="Portfolio sections" />

        <div class="min-w-0">
          <UxUiSection />
          <DesignSection />
          <DevSection />
        </div>
      </div>
    </div>
  </div>
</template>
