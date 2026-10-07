<script setup lang="ts">
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'

import { useScrollReveal } from '@/composables/useScrollReveal'

const { isVisible: heroVisible, sectionRef: heroRef } = useScrollReveal(0.3)
const { isVisible: ladderHeaderVisible, sectionRef: ladderHeaderRef } = useScrollReveal(0.3)
</script>

<template>
  <section class="bg-neutral-000">
    <div
      class="max-w-7xl mx-auto py-20 px-6 md:py-25 transition-all duration-1000"
      ref="heroRef"
      :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="flex flex-col justify-center md:items-start md:text-left gap-6 md:gap-8 w-full">
        <h1
          class="font-bold text-text-900 tracking-tight font-header text-4xl sm:text-5xl md:text-6xl"
        >
          ABOUT ME
        </h1>
        <p class="text-lg sm:text-xl md:text-xl text-text-900 font-semibold">
          Hi, I'm <span class="text-brand-primary">Illya</span> — a Toronto-based visual designer
          working at the intersection of brand systems, UX/UI, and front-end development. My
          background is in interactive media and graphic design, and I bring that discipline to
          building responsive digital experiences across the web.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
          <!--UX/UI-->
          <div
            class="px-6 py-6 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <img src="/icons/ux_icon.svg" alt="icon" class="h-10 sm:h-14 pb-4 sm:pb-6" />
            <h3 class="text-xl sm:text-2xl font-bold pb-2">UX/UI</h3>
            <p class="text-base sm:text-lg font-medium">Wireframes, Prototypes, Design systems</p>
          </div>

          <!--Web development-->
          <div
            class="px-6 py-6 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <img src="/icons/dev_icon.svg" alt="icon" class="h-10 sm:h-14 pb-4 sm:pb-6" />
            <h3 class="text-xl sm:text-2xl font-bold pb-2">WEB DEVELOPMENT</h3>
            <p class="text-base sm:text-lg font-medium">Vue, TypeScript, Asp.net core</p>
          </div>
          <!--Brand-->
          <div
            class="px-6 py-6 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <img src="/icons/print_icon.svg" alt="icon" class="h-10 sm:h-14 pb-4 sm:pb-6" />
            <h3 class="text-xl sm:text-2xl font-bold pb-2">PRINT & BRANDING</h3>
            <p class="text-base sm:text-lg font-medium">
              Identity systems, Logos, Brand guidelines
            </p>
          </div>

          <!--Editorial-->
          <div
            class="px-6 py-6 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <img src="/icons/edit_icon.svg" alt="icon" class="h-10 sm:h-14 pb-4 sm:pb-6" />
            <h3 class="text-xl sm:text-2xl font-bold pb-2">EDITORIAL</h3>
            <p class="text-base sm:text-lg font-medium">Layouts, Publications, Print production</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-neutral-000">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div
        class="transition-all duration-1000"
        ref="ladderHeaderRef"
        :class="ladderHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex flex-col gap-2 pb-10 items-center md:items-start text-center md:text-left">
          <p class="text-brand-primary text-lg">my progress</p>
          <div>
            <h2 class="text-text-900 text-3xl sm:text-4xl font-header font-bold">
              EXPERIENCE LADDER
            </h2>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <Experience>
          <template #position> Graphic Designer (Contract)</template>
          <template #year>Sept 2024 – Present</template>
          <template #description>
            <li>
              Engineered and maintained a centralized library of 50+ modular layout templates and
              responsive components, cutting cross-platform delivery turnaround by an estimated 30%
              across weekly production cycles.
            </li>
            <li>
              Architected high-impact B2B digital sell sheets, applying progressive disclosure and
              structured visual hierarchies to translate dense technical offerings into scannable,
              conversion-focused interfaces.
            </li>
            <li>
              Restructured dense, data-heavy content into intuitive multi-page information
              architectures, leveraging strict typographic scales, vertical rhythm, and baseline
              layout grids to minimize cognitive fatigue and maximize scannability.
            </li>
            <li>
              Drove end-to-end design execution from initial brief synthesis to final developer and
              stakeholder handoff, aligning cross-functional partners around technical feasibility
              and shipping high-impact deliverables on accelerated release timelines.
            </li>
          </template>
        </Experience>
        <Experience>
          <template #position>Product & Visual Designer (Freelance)</template>
          <template #year>2021 – 2024</template>
          <template #description>
            <li>
              Led end-to-end UX/UI redesigns and responsive web overhauls, translating client
              requirements into structured information architectures, wireframes, and
              production-ready digital interfaces.
            </li>
            <li>
              Conducted generative user interviews and usability testing sessions across multiple
              digital projects, synthesizing qualitative research into actionable wireframe
              iterations that resolved user friction.
            </li>
            <li>
              Built high-fidelity interactive prototypes to simulate complex task flows, streamline
              client stakeholder approvals, and validate usability before development handoff.
            </li>
            <li>
              Implemented and maintained front-end stylesheets (CSS/HTML) across custom web
              platforms (WordPress, CMS), aligning live production code with strict typographic
              scales, color tokens, and responsive breakpoints.
            </li>
            <li>
              Directed cross-channel visual identity systems, scaling brand standards across both
              digital web platforms and large-format print collateral (billboards, editorial, and
              promotional assets) with rigorous typographic governance.
            </li>
          </template>
        </Experience>
        <Experience>
          <template #position> Graphic Design Assistant — Stellar Biotics LLC</template>
          <template #year>Aug 2020 – Aug 2021</template>
          <template #description>
            <li>
              Assisted in preparing and structuring presentation decks and visual asset files for
              internal and client-facing use.
            </li>
            <li>Conducted research to inform presentation content and design direction.</li>
          </template>
        </Experience>
        <h2
          class="text-text-900 text-3xl sm:text-4xl font-header font-bold py-5 text-center md:text-left"
        >
          EDUCATION
        </h2>

        <Experience>
          <template #position> Algonquin College</template>
          <template #year>2019 - 2021</template>
          <template #description>
            <li class="list-none">Interactive media design Diploma | Ottawa, Canada</li>
          </template>
        </Experience>
        <Experience>
          <template #position> Google UX Design Professional Certificate</template>
          <template #year>2026</template>
          <template #description>
            <li class="list-none">
              Focused on user discovery, generative interviews, usability studies, and data-backed
              product iteration.
            </li>
          </template>
        </Experience>

        <div class="flex flex-col gap-2 pt-10 pb-5">
          <p class="text-brand-primary text-lg">what i use</p>
          <h2 class="text-text-900 text-3xl sm:text-4xl font-header font-bold">TOOLS</h2>
        </div>
        <div class="">
          <p class="text-text-700 text-lg font-bold pb-6 text-center md:text-left">design</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            <Skills>
              <template #icon
                ><img src="/icons/logo_figma.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Figma</template>
            </Skills>
            <Skills>
              <template #icon
                ><img src="/icons/logo_photoshop.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Photoshop</template>
            </Skills>
            <Skills>
              <template #icon
                ><img src="/icons/logo_illustrator.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>Illustrator</template>
            </Skills>
            <Skills>
              <template #icon
                ><img src="/icons/logo_indesign.svg" alt="" class="h-10 w-10"
              /></template>
              <template #tool>InDesign</template>
            </Skills>
          </div>
          <p class="text-text-700 text-lg font-bold pb-6 text-center md:text-left">development</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skills>
              <template #icon
                ><img src="/icons/logo_html.svg" alt="" class="h-10 w-10" /><img
                  src="/icons/logo_css.svg"
                  alt=""
                  class="h-10 w-10"
              /></template>
              <template #tool>Html & Css</template>
            </Skills>
            <Skills>
              <template #icon><img src="/icons/logo_vue.svg" alt="" class="h-10 w-10" /></template>
              <template #tool>Vue</template>
            </Skills>
            <Skills>
              <template #icon><img src="/icons/logo_ts.svg" alt="" class="h-10 w-10" /></template>
              <template #tool>Typescript</template>
            </Skills>
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
