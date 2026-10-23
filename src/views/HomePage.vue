<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <!--Top Section-->
    <header class="border-b border-project-dividers">
      <div
        class="flex flex-col items-center gap-10 px-4 py-8 lg:flex-row lg:justify-between lg:gap-10 sm:px-20"
      >
        <div class="flex shrink-0 items-center justify-center gap-3 md:gap-6">
          <picture class="shrink-0">
            <source media="(min-width: 768px)" srcset="/logo.svg" />
            <img src="/logo_classic.svg" alt="" class="w-auto md:h-auto" />
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

    <!--Cards Section-->
    <section
      class="relative isolate flex flex-1 items-center justify-center px-4 py-10 md:px-10 lg:px-20"
    >
      <!-- Grid Background -->
      <div
        class="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-project-bg bg-[linear-gradient(to_right,#E3E3E3_1px,transparent_1px),linear-gradient(to_bottom,#E3E3E3_1px,transparent_1px)] bg-[size:4rem_4rem]"
      ></div>

      <!-- Cards Container -->
      <div class="grid grid-cols-1 justify-items-center gap-8 md:gap-10 xl:grid-cols-3 xl:gap-12">
        <HomeCard>
          <img
            src="/project_img/invoice/Presentation_02.jpg"
            alt="Preview of the invoicing app landing page"
            class="w-full"
          />
          <template #caption>01 / INDEX</template>
          <template #cardTitle>UX / UI & Product</template>
          <template #text
            >Designing data-dense responsive interfaces, structured user flows, and human-centered
            design systems built on accessibility standards.</template
          >
          <template #link>Explore UX / UI ↗</template>
        </HomeCard>

        <HomeCard>
          <img
            src="/project_img/invoice/Presentation_02.jpg"
            alt="Preview of a graphic and editorial project"
            class="w-full"
          />
          <template #caption>02 / ARCHIVE</template>
          <template #cardTitle>Graphic & Editorial</template>
          <template #text
            >Brand identities, covers and editorial layouts from five years of print and digital
            work.</template
          >
          <template #link>Browse Graphic Archive ↗</template>
        </HomeCard>

        <HomeCard>
          <img
            src="/project_img/invoice/Presentation_02.jpg"
            alt="Preview of a front-end project"
            class="w-full"
          />
          <template #caption>03 / LAB</template>
          <template #cardTitle>Front-end & Code</template>
          <template #text>Vue and TypeScript builds, including this site.</template>
          <template #link>Inspect Code & Demos ↗</template>
        </HomeCard>
      </div>
    </section>
  </div>
</template>
