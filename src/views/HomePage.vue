<script setup lang="ts">
import IndexList from '@/components/IndexList.vue'
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <!--Top Section-->
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

    <!--Index Section-->
    <section class="flex flex-1 flex-col">
      <ul class="flex flex-1 flex-col">
        <li class="flex flex-1 border-b border-project-dividers">
          <IndexList to="/work/ux-ui">
            <template #number>01</template>
            <template #caption>INDEX</template>
            <template #name>UX / UI and product</template>
            <template #text>
              Data-dense responsive interfaces, user flows and accessible design systems.
            </template>
            <img
              src="/project_img/invoice/Presentation_02.jpg"
              alt="Preview of the invoicing app landing page"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <template #link>Explore UX / UI →</template>
          </IndexList>
        </li>

        <li class="flex flex-1 border-b border-project-dividers">
          <IndexList to="/work/design">
            <template #number>02</template>
            <template #caption>ARCHIVE</template>
            <template #name>Graphic and editorial</template>
            <template #text>
              Brand identities, covers and editorial layouts from five years of print and digital
              work.
            </template>
            <img
              src="/project_img/invoice/Presentation_02.jpg"
              alt="Preview of a graphic and editorial project"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <template #link>Browse archive →</template>
          </IndexList>
        </li>

        <li class="flex flex-1">
          <IndexList to="/code">
            <template #number>03</template>
            <template #caption>LAB</template>
            <template #name>Front-end and code</template>
            <template #text>Vue and TypeScript builds, including this site.</template>
            <img
              src="/project_img/invoice/Presentation_02.jpg"
              alt="Preview of a front-end project"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <template #link>Inspect code →</template>
          </IndexList>
        </li>
      </ul>
    </section>
  </div>
</template>
