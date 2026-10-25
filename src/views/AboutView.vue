<script setup lang="ts">
import DisciplineCard from '@/components/DisciplineCard.vue'
import FactCard from '@/components/FactCard.vue'
import Pill from '@/components/Pill.vue'
import TimelineRow from '@/components/TimelineRow.vue'

const experience = [
  {
    date: 'Sept 2024 – Present',
    title: 'Graphic Designer (Contract)',
    meta: "Canada's Top 100 Employers · Toronto",
    text: 'InDesign magazine templates, high-volume layouts and Photoshop asset prep.',
  },
  {
    date: 'Sept 2021 – Jul 2024',
    title: 'Product & Visual Designer (Freelance)',
    meta: 'Remote',
    text: 'Brand identities, Figma prototypes, print and digital production for independent clients.',
  },
  {
    date: 'Aug 2020 – Aug 2021',
    title: 'Graphic Design Assistant',
    meta: 'Stellar Biotics LLC',
    text: 'Presentation decks and design research.',
  },
]

const education = [
  {
    date: 'Oct 2026',
    title: 'Digital Product Management: Modern Fundamentals',
    meta: 'Coursera Certificate',
  },
  {
    date: 'Oct 2026',
    title: 'Google UX Design Professional Certificate',
    meta: 'Coursera Certificate',
  },
  {
    date: '2019 – 2022',
    title: 'Interactive Media Design Diploma',
    meta: 'Algonquin College · Ottawa',
  },
]
</script>
<template>
  <!--Top Section-->
  <section class="border-b border-project-dividers">
    <div class="px-4 sm:px-20 py-10 space-y-8">
      <h1 class="text-display">
        Illya Shpylka <br />
        Visual & Product Designer
      </h1>
      <div class="flex flex-row justify-between items-center">
        <p class="text-lead">( Canada, Toronto )</p>
        <div class="space-x-6">
          <RouterLink to="/" class="text-ui"> Home </RouterLink>
          <RouterLink to="/work" class="text-ui"> Work </RouterLink>
          <a
            href="/Illya_Shpylka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ui underline underline-offset-4"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </div>
  </section>
  <!--About section-->
  <section class="border-b border-project-dividers">
    <div class="grid items-center gap-10 px-4 sm:px-20 py-16 md:grid-cols-[2fr_3fr] md:gap-16">
      <!-- Photo -->
      <img
        src="/Illya.jpg"
        alt="Illya"
        class="w-full rounded border border-project-dividers object-cover"
      />
      <!-- Text -->
      <div class="flex flex-col gap-8">
        <p class="text-lead text-project-labels">01 / START</p>

        <h2 class="text-5xl md:text-6xl">About me</h2>

        <p class="text-lead max-w-prose">
          Hi, I'm Illya, a Toronto-based designer with a graphic design background and a growing
          focus on UX/UI and front-end development. I'm looking for a junior UX/UI role where I can
          turn research into clear, accessible products.
        </p>

        <div class="flex flex-wrap items-center gap-6">
          <RouterLink
            to="/projects"
            class="text-ui rounded bg-project-text px-5 py-3 text-project-bg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
          >
            View projects
          </RouterLink>

          <a
            href="/Illya_Shpylka_Resume.pdf"
            download
            class="text-ui underline underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
          >
            Download résumé
          </a>
        </div>
      </div>
    </div>

    <!--FactCard
    <div class="px-4 sm:px-20 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <FactCard>
          <template #caption>Experience</template>
          <template #fact>5 years in graphic design</template>
        </FactCard>
        <FactCard>
          <template #caption>Focus</template>
          <template #fact>UX/UI and design systems</template>
        </FactCard>
        <FactCard>
          <template #caption>Open to</template>
          <template #fact>Remote · Hybrid · Onsite</template>
        </FactCard>
      </div>
    </div>
-->
    <!--DisciplineCard-->
    <div class="px-4 sm:px-20 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DisciplineCard>
          <template #caption>01 / UX/UI</template>
          <template #title>UX / UI & Product</template>
          <template #text>Research, flows, wireframes, prototypes and usability testing.</template>
          <ul class="flex flex-wrap gap-2.5">
            <Pill>Figma</Pill>
            <Pill>FigJam</Pill>
            <Pill>Wireframing</Pill>
            <Pill>Prototyping</Pill>
            <Pill>Usability testing</Pill>
            <Pill>User interviews</Pill>
            <Pill>Information architecture</Pill>
          </ul>
        </DisciplineCard>
        <DisciplineCard>
          <template #caption>02 / GRAPHIC</template>
          <template #title>Graphic & Editorial</template>
          <template #text>Layout, identity and print production.</template>
          <ul class="flex flex-wrap gap-2.5">
            <Pill>InDesign</Pill>
            <Pill>Illustrator</Pill>
            <Pill>Photoshop</Pill>
            <Pill>Typography</Pill>
            <Pill>Brand identity</Pill>
          </ul>
        </DisciplineCard>
        <DisciplineCard>
          <template #caption>03 / CODE</template>
          <template #title>Front-end & Code</template>
          <template #text>Responsive builds with modern frameworks.</template>
          <ul class="flex flex-wrap gap-2.5">
            <Pill>HTML / CSS</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Vue</Pill>
            <Pill>TypeScrip</Pill>
            <Pill>C# / .NET</Pill>
            <Pill>SQL</Pill>
          </ul>
        </DisciplineCard>
      </div>
    </div>
  </section>
  <!--Experience & Education-->
  <section>
    <div class="space-y-16 px-4 sm:px-20 py-10">
      <div class="space-y-8">
        <p class="text-lead text-project-labels">02 / BUILDING BLOCKS</p>
        <h2>Experience</h2>
        <ul class="divide-y divide-project-dividers border-y border-project-dividers">
          <TimelineRow
            v-for="job in experience"
            :key="job.title"
            :date="job.date"
            :title="job.title"
            :meta="job.meta"
          >
            {{ job.text }}
          </TimelineRow>
        </ul>
      </div>

      <div class="space-y-8">
        <h2>Education</h2>
        <ul class="divide-y divide-project-dividers border-y border-project-dividers">
          <TimelineRow
            v-for="item in education"
            :key="item.title"
            :date="item.date"
            :title="item.title"
            :meta="item.meta"
          />
        </ul>
        <a
          href="/Illya_Shpylka_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui underline underline-offset-4"
        >
          Full detail on my résumé ↗
        </a>
      </div>
    </div>
  </section>
</template>
