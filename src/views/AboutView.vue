<script setup lang="ts">
import Experience from '@/components/Experience.vue'
</script>

<template>
  <!--About Header-->
  <section class="bg-neutral-300">
    <div class="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:py-25 transition-all duration-1000">
      <div class="flex flex-col justify-center gap-6 md:gap-8 w-full">
        <h1
          class="font-bold text-text-900 tracking-tight font-header text-6xl sm:text-6xl md:text-6xl"
        >
          ABOUT ME
        </h1>
        <p class="text-xl sm:text-xl md:text-xl text-text-900 font-semibold">
          Hi, I'm <span class="text-brand-primary">Illya</span> — a Toronto-based graphic designer
          with a growing focus on UX/UI and front-end development. My background is in editorial
          layout and brand design, and I'm expanding that into building the systems that bring those
          designs to life on the web.
        </p>
        <!--Stats-->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:pt-5 md:pt-10">
          <!--Design Experince-->
          <div
            class="px-10 py-10 bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300"
          >
            <h3 class="text-4xl font-bold pb-2">5+ YEARS</h3>
            <p class="text-xl font-medium">Graphic design experience</p>
          </div>

          <!--Project Delivered-->
          <div
            class="px-10 py-10 bg-neutral-900 text-neutral-300 border-3 border-neutral-900 hover:border-brand-primary transition-colors duration-300"
          >
            <h3 class="text-4xl font-bold pb-2">40+</h3>
            <p class="text-xl font-medium">Editorial/print projects delivered</p>
          </div>

          <!--Developer-->
          <div
            class="px-10 py-10 bg-neutral-900 text-neutral-300 border-3 border-neutral-900 hover:border-brand-primary transition-colors duration-300"
          >
            <h3 class="text-4xl font-bold pb-2">SINCE 2024</h3>
            <p class="text-xl font-medium">Self-taught developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Experience Section-->
  <section class="bg-neutral-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div class="">
        <div class="flex flex-col gap-2 pb-10">
          <p class="text-brand-primary text-lg">my progress</p>
          <div class="flex flex-wrap justify-between gap-6">
            <h2 class="text-text-900 text-4xl font-header font-bold">EXPERIENCE LADDER</h2>
          </div>
        </div>
      </div>
      <!--Experience section-->
      <div class="space-y-6">
        <!--1-->
        <Experience>
          <template #position> Graphic Designer (Contract)</template>
          <template #year>Sept 2024 – Present</template>
          <template #description>
            Building and maintaining layout templates in Adobe InDesign for recurring magazine
            production, handling high-volume asset integration under tight deadlines, and preparing
            digital assets in Photoshop to professional print/digital standards — working daily with
            editors and project managers to turn briefs into polished designs.
          </template>
        </Experience>
        <!--2-->
        <Experience>
          <template #position>Graphic Designer — Remote</template>
          <template #year>2021 – 2024</template>
          <template #description>
            Developed visual identities, logos, and style guides for a range of clients; built
            scalable Figma layouts and interactive prototypes bridging design and front-end
            execution; managed full production lifecycles across print and digital media, from
            marketing collateral to custom digital cover art.
          </template>
        </Experience>
        <!--3-->
        <Experience>
          <template #position> Graphic Design Assistant — Stellar Biotics LLC</template>
          <template #year>Aug 2020 – Aug 2021</template>
          <template #description>
            Supported presentation deck production and research for internal and client-facing
            design direction.
          </template>
        </Experience>
      </div>
    </div>
  </section>
</template>
