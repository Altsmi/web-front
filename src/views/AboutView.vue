<script setup lang="ts">
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'

//scroll reveal
import { useScrollReveal } from '@/composables/useScrollReveal'

const { isVisible: heroVisible, sectionRef: heroRef } = useScrollReveal(0.3)
const { isVisible: ladderHeaderVisible, sectionRef: ladderHeaderRef } = useScrollReveal(0.3)
</script>

<template>
  <!--About Header-->
  <section class="bg-neutral-300">
    <div
      class="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:py-25 transition-all duration-1000"
      ref="heroRef"
      :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
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
  <section class="bg-neutral-000">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div
        class="transition-all duration-1000"
        ref="ladderHeaderRef"
        :class="ladderHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex flex-col gap-2 pb-10">
          <p class="text-brand-primary text-lg">my progress</p>
          <div>
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
            <li>
              Built and maintained comprehensive layout templates using Adobe InDesign, improving
              workflow consistency and speeding up production for recurring magazine projects.
            </li>
            <li>
              Executed high-volume asset integration, accurately placing complex text, images, and
              data into established templates under tight publishing deadlines.
            </li>
            <li>
              Handled digital asset preparation, using Adobe Photoshop for photo retouching, color
              correction, and formatting to ensure all visual content met professional print and
              digital standards.
            </li>
            <li>
              Collaborated daily with editors and project managers to turn creative briefs into
              polished, production-ready editorial designs.
            </li>
          </template>
        </Experience>
        <!--2-->
        <Experience>
          <template #position>Graphic Designer — Remote</template>
          <template #year>2021 – 2024</template>
          <template #description>
            <li>
              Created visual identities and digital assets for diverse clients, developing logos,
              typography guidelines, and style guides based on client requirements.
            </li>
            <li>
              Built scalable Figma layouts and interactive prototypes, bridging the gap between
              visual design and frontend execution.
            </li>
            <li>
              Prepared and presented design concepts and project update decks directly to clients,
              explaining visual choices and gathering feedback.
            </li>
            <li>
              Managed full-lifecycle production for print and digital media, balancing artistic
              direction with commercial viability to deliver marketing collateral, large-format
              assets, and custom digital cover art for independent creators.
            </li>
          </template>
        </Experience>
        <!--3-->
        <Experience>
          <template #position> Graphic Design Assistant — Stellar Biotics LLC</template>
          <template #year>Aug 2020 – Aug 2021</template>
          <template #description>
            <li>
              Assisted in preparing presentation decks and supporting files for internal and
              client-facing use.
            </li>
            <li>Conducted research to inform presentation content and design direction.</li>
          </template>
        </Experience>
        <!--Education-->
        <h2 class="text-text-900 text-4xl font-header font-bold py-5">EDUCATION</h2>
        <Experience>
          <template #position> Algonquin college</template>
          <template #year>2019 - 2022</template>
          <template #description>
            <li class="list-none">Interactive media Design course | Ottawa, Canada</li>
          </template>
        </Experience>

        <!--Tools-->
        <div class="flex flex-col gap-2 py-5 text-center">
          <p class="text-brand-primary text-lg">what i use</p>
          <h2 class="text-text-900 text-4xl font-header font-bold">TOOLS & SKILLS</h2>
        </div>
        <!--Tools Icons-->
        <div class="">
          <!--Design Tools-->
          <p class="text-text-700 text-lg font-bold pb-6">design</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            <!--1-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_figma.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Figma</template>
            </Skills>
            <!--2-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_photoshop.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Photoshop</template>
            </Skills>
            <!--3-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_illustrator.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Illustrator</template>
            </Skills>
            <!--4-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_indesign.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>InDesign</template>
            </Skills>
          </div>
          <!--Devolopment Tools-->
          <p class="text-text-700 text-lg font-bold pb-6">development</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!--1-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_html.svg" alt="" class="h-10 w-10" /><img
                  src="/icons/logo_css.svg"
                  alt=""
                  class="h-10 w-10"
              /></template>
              <template #tool>Html & Css</template>
            </Skills>
            <!--2-->
            <Skills>
              <template #icon><img src="/icons/logo_vue.svg" alt="" class="h-10 w-10" /></template>
              <template #tool>Vue</template>
            </Skills>
            <!--3-->
            <Skills>
              <template #icon><img src="/icons/logo_ts.svg" alt="" class="h-10 w-10" /></template>
              <template #tool>Typescript</template>
            </Skills>
            <!--4-->
            <Skills>
              <template #icon
                ><img src="/icons/logo_csharp.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>C#</template>
            </Skills>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
