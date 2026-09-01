<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { projectPreviewData } from '@/data/ProjectPreviewData'

const activeIndex = ref(0)
const activeProject = computed(() => projectPreviewData[activeIndex.value]!)
const isPaused = ref(false)

let intervalId: number | undefined

function advance() {
  activeIndex.value = (activeIndex.value + 1) % projectPreviewData.length
}

function goToIndex(index: number) {
  activeIndex.value = index
}

function startAutoAdvance() {
  intervalId = window.setInterval(() => {
    if (!isPaused.value) advance()
  }, 2000)
}

onMounted(() => {
  startAutoAdvance()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
// opacity for info bars
const barOpacities = ['opacity-25', 'opacity-50', 'opacity-75', 'opacity-100']

// reveal on scroll
import { useScrollReveal } from '@/composables/useScrollReveal'

const { isVisible: heroVisible, sectionRef: heroRef } = useScrollReveal(0.3)
const { isVisible: expertiseVisible, sectionRef: expertiseRef } = useScrollReveal(0.2)
const { isVisible: aboutVisible, sectionRef: aboutRef } = useScrollReveal(0.3)
const { isVisible: contactVisible, sectionRef: contactRef } = useScrollReveal(0.3)
</script>

<template>
  <section class="bg-brand-primary">
    <div
      ref="heroRef"
      class="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:py-20 transition-all duration-1000"
      :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 md:gap-10"
      >
        <div
          class="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 md:gap-8 w-full md:w-3/5"
        >
          <h1
            class="font-semibold text-text-900 tracking-tight font-header text-4xl sm:text-5xl md:text-6xl"
          >
            I DESIGN IDEAS INTO <span class="font-extrabold">REALITY . . .</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-xl text-text-900 font-semibold">
            Graphic designer with a developer's eye for detail. I craft brand identities and
            editorial layouts, and build the systems that bring them to life on the web.
          </p>
          <div class="flex justify-center md:justify-start w-full">
            <RouterLink
              to="/about"
              class="inline-block w-full md:w-fit text-center rounded-sm bg-neutral-900 px-4 py-2 border-3 border-neutral-900 text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
            >
              learn more →
            </RouterLink>
          </div>
        </div>

        <div class="w-1/2 md:w-2/5 items-center hidden md:block lg:block">
          <img
            src="/banner_element.svg"
            alt="Hero Image"
            class="max-h-64 md:max-h-full h-auto w-auto object-contain ml-auto"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Skills Section -->
  <section class="bg-neutral-300">
    <div
      class="max-w-7xl mx-auto py-15 px-6 transition-all duration-1000"
      ref="expertiseRef"
      :class="expertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="flex flex-col gap-2 pb-10 items-center text-center">
        <p class="text-brand-primary text-lg font-bold">what i do</p>
        <h2 class="text-text-900 text-4xl font-header font-bold">EXPERTISE</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <!--UX/UI-->
        <div
          class="px-6 py-8 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <img src="/icons/ux_icon.svg" alt="icon" class="h-14 pb-6" />
          <h3 class="text-2xl font-bold pb-2">UX/UI</h3>
          <p class="text-lg font-medium">Wireframes, Prototypes, Design systems</p>
        </div>

        <!--Web development-->
        <div
          class="px-6 py-8 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <img src="/icons/dev_icon.svg" alt="icon" class="h-14 pb-6" />
          <h3 class="text-2xl font-bold pb-2">WEB DEVELOPMENT</h3>
          <p class="text-lg font-medium">Vue, TypeScript, Asp.net core</p>
        </div>
        <!--Brand-->
        <div
          class="px-6 py-8 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <img src="/icons/print_icon.svg" alt="icon" class="h-14 pb-6" />
          <h3 class="text-2xl font-bold pb-2">PRINT & BRANDING</h3>
          <p class="text-lg font-medium">Identity systems, Logos, Brand guidelines</p>
        </div>

        <!--Editorial-->
        <div
          class="px-6 py-8 sm:px-10 sm:py-10 rounded-sm bg-neutral-900 text-neutral-300 border-4 border-neutral-900 hover:border-brand-primary transition-colors duration-300 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <img src="/icons/edit_icon.svg" alt="icon" class="h-14 pb-6" />
          <h3 class="text-2xl font-bold pb-2">EDITORIAL</h3>
          <p class="text-lg font-medium">Layouts, Publications, Print production</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Project preview -->
  <section class="max-w-7xl mx-auto px-6 pb-20 md:pb-25">
    <!--Project header -->
    <div class="bg-neutral-900 pt-20 md:pt-25">
      <div class="flex flex-col gap-2 pb-4 items-center md:items-start text-center md:text-left">
        <p class="text-brand-primary text-lg">design.build.deliver</p>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-between items-center md:items-start gap-4 md:gap-6 w-full"
        >
          <h2 class="text-text-000 text-3xl sm:text-4xl font-header font-bold">PROJECT PREVIEW</h2>
          <RouterLink
            to="projects"
            class="hidden md:inline-block rounded-sm bg-neutral-900 px-4 py-2 border-3 border-brand-primary text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
            >more projects →</RouterLink
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row gap-6 items-start"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <!--left side -->
      <div id="info-section" class="w-full md:w-1/2 order-2 md:order-1">
        <div class="flex flex-col gap-2.5">
          <!--Bars: desktop only-->
          <div
            v-for="(project, index) in projectPreviewData"
            :key="project.id"
            class="hidden md:block h-10 w-auto transition-colors duration-300 cursor-pointer rounded-sm"
            :class="[
              index === activeIndex ? 'bg-brand-primary' : 'bg-neutral-000',
              barOpacities[index],
            ]"
            @click="goToIndex(index)"
          ></div>
          <RouterLink
            to="projects"
            class="inline-block text-center md:hidden rounded-sm bg-neutral-900 px-4 py-2 border-3 border-brand-primary text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
            >more projects →</RouterLink
          >
          <!--Info Section-->
          <div
            class="bg-neutral-000 px-6 py-8 sm:px-10 md:block hidden sm:py-10 flex flex-col gap-6 rounded-sm text-center md:text-left items-center md:items-start"
          >
            <Transition name="fade" mode="out-in">
              <div :key="activeIndex" class="space-y-4 flex flex-col items-center md:items-start">
                <h3 class="text-3xl sm:text-4xl font-bold">{{ activeProject.name }}</h3>
                <p class="text-lg font-medium md:h-45">
                  {{ activeProject.description }}
                </p>
              </div>
            </Transition>
            <!--Tools-->
            <TransitionGroup
              name="fade-tools"
              tag="div"
              class="h-15 bg-neutral-900 flex flex-row gap-2 p-2 justify-center md:justify-end items-center rounded-sm w-full"
            >
              <img
                v-for="tool in activeProject.tools"
                :key="`${activeIndex}-${tool}`"
                :src="tool"
                class="h-10 w-10"
              />
            </TransitionGroup>
          </div>
        </div>
      </div>

      <!--Rigt side -->
      <div id="project-img" class="w-full md:w-1/2 order-1 md:order-2">
        <Transition name="fade" mode="out-in">
          <img
            :key="activeIndex"
            :src="activeProject.img"
            alt="project"
            class="h-64 sm:h-96 md:h-145 w-full object-cover rounded-sm"
          />
        </Transition>
      </div>
    </div>
  </section>

  <!--About Teaser-->
  <section class="bg-neutral-300">
    <div
      class="max-w-7xl mx-auto py-20 px-6 transition-all duration-1000"
      ref="aboutRef"
      :class="aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <!--Grid section-->
      <div
        class="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center text-center md:text-left"
      >
        <!--img-->
        <div class="w-40 md:w-56 shrink-0">
          <img
            src="/project_img/About_picture.JPG"
            alt="avatar"
            class="w-full h-auto object-cover rounded-full aspect-square"
          />
        </div>
        <!--info-->
        <div class="flex flex-col gap-4 justify-center items-center md:items-start max-w-4xl">
          <p class="text-brand-primary text-lg font-bold">who i am</p>
          <p class="text-text-900 text-lg sm:text-xl font-bold">
            Toronto-based — half designer, half developer. I craft brand identities and editorial
            layouts, then build the front-end systems that bring them to life.
          </p>
          <RouterLink to="about" class="font-medium hover:underline transition-all text-center"
            >more about me →</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
