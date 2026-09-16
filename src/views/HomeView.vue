<script setup lang="ts">
import { projectCardData } from '@/data/ProjectCardData'

import { useScrollReveal } from '@/composables/useScrollReveal'

const { isVisible: heroVisible, sectionRef: heroRef } = useScrollReveal(0.3)

//project files

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import { uxResearchData } from '@/data/UxResearchData'

const router = useRouter()
const selectedSlug = ref<string | null>(null)

function openProject(slug: string) {
  selectedSlug.value = slug
}

function closeProject() {
  selectedSlug.value = null
}

function goToUxProject(slug: string) {
  router.push(`/projects/ux/${slug}`)
}

const { isVisible: sheroVisible, sectionRef: sheroRef } = useScrollReveal(0.3)

//  Active projects
const activeFilter = ref<'all' | 'ux' | 'visual'>('all')
</script>

<template>
  <section
    class="bg-neutral-000 flex items-center"
    style="min-height: calc(100vh - var(--nav-height))"
  >
    <div
      ref="heroRef"
      class="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:py-20 transition-all duration-1000"
      :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 lg:gap-10"
      >
        <div
          class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 w-full lg:w-3/5"
        >
          <h1 class="font-semibold text-text-900 tracking-tight font-header text-5xl md:text-6xl">
            BRINGING VISUAL CRAFT TO DIGITAL REALITY
          </h1>
          <p class="text-lg sm:text-xl md:text-xl text-text-900 font-semibold">
            Visual Designer with a front-end foundation. I craft scalable brand identities,
            editorial layouts, and the responsive systems that bring them to life on the web.
          </p>
          <div class="flex justify-center lg:justify-start w-full">
            <RouterLink
              to="/about"
              class="inline-block w-full md:w-fit text-center rounded-sm bg-neutral-900 px-4 py-2 border-3 border-neutral-900 text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
            >
              learn more →
            </RouterLink>
          </div>
        </div>

        <div class="w-1/2 md:w-2/5 items-center hidden lg:block">
          <img
            src="/banner_element.svg"
            alt="Hero Image"
            class="max-h-64 md:max-h-full h-auto w-auto object-contain ml-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <!--Projects-->
  <section id="projects" class="bg-neutral-300 overflow-hidden">
    <div
      class="max-w-7xl mx-auto py-20 px-6 transition-all duration-1000"
      ref="sheroRef"
      :class="sheroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="flex flex-col gap-2 pb-10 items-center text-center md:text-left">
        <p class="text-brand-primary text-lg">my progress</p>
        <h2 class="text-text-900 font-header text-4xl sm:text-5xl md:text-6xl font-semibold">
          EXPERIENCE LADDER
        </h2>
      </div>
    </div>
  </section>

  <section class="bg-neutral-300">
    <div class="max-w-7xl mx-auto pb-20 px-6 md:pb-20 transition-all duration-1000">
      <!--Filter buttons-->
      <div class="flex flex-wrap gap-3 justify-center pb-10">
        <button
          type="button"
          class="rounded-sm px-4 py-2 border-3 text-sm sm:text-base transition-all duration-300"
          :class="
            activeFilter === 'all'
              ? 'bg-neutral-900 text-text-000 border-neutral-900'
              : 'bg-transparent text-text-900 border-neutral-900 hover:bg-neutral-900 hover:text-text-000'
          "
          @click="activeFilter = 'all'"
        >
          all
        </button>
        <!--
        <button
          type="button"
          class="rounded-sm px-4 py-2 border-3 text-sm sm:text-base transition-all duration-300"
          :class="
            activeFilter === 'ux'
              ? 'bg-neutral-900 text-text-000 border-neutral-900'
              : 'bg-transparent text-text-900 border-neutral-900 hover:bg-neutral-900 hover:text-text-000'
          "
          @click="activeFilter = 'ux'"
        >
          ux/ui
        </button>
        -->
        <button
          type="button"
          class="rounded-sm px-4 py-2 border-3 text-sm sm:text-base transition-all duration-300"
          :class="
            activeFilter === 'visual'
              ? 'bg-neutral-900 text-text-000 border-neutral-900'
              : 'bg-transparent text-text-900 border-neutral-900 hover:bg-neutral-900 hover:text-text-000'
          "
          @click="activeFilter = 'visual'"
        >
          visual design
        </button>
      </div>

      <div class="space-y-6">
        <!--UX Research
        <div v-if="activeFilter === 'all' || activeFilter === 'ux'">
          <div class="grid grid-cols-1 gap-6">
            <ProjectCard
              v-for="card in uxResearchData"
              :key="card.slug"
              :card="card"
              featured
              @click="goToUxProject(card.slug)"
            />
          </div>
        </div>
-->
        <!--Visual design-->
        <div v-if="activeFilter === 'all' || activeFilter === 'visual'">
          <div class="grid grid-cols-2 gap-6">
            <ProjectCard
              v-for="card in projectCardData"
              :key="card.slug"
              :card="card"
              @click="openProject(card.slug)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <ProjectModal :selectedSlug="selectedSlug" @close="closeProject" />
</template>
