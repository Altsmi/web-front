<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { projectPreviewData } from '@/data/ProjectPreviewData'
import FormComponent from '@/components/formComponent.vue'

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
  }, 3000)
}

onMounted(() => {
  startAutoAdvance()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

// Opacity for info bars
const barOpacities = ['opacity-25', 'opacity-50', 'opacity-75', 'opacity-100']
</script>

<template>
  <section class="bg-brand-primary">
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:py-20">
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 md:gap-10"
      >
        <div class="flex flex-col justify-center gap-6 md:gap-8 w-full md:w-3/5">
          <h1
            class="font-semibold text-text-900 tracking-tight font-header text-6xl sm:text-6xl md:text-6xl"
          >
            I DESIGN IDEAS INTO <span class="font-extrabold">REALITY . . .</span>
          </h1>
          <p class="text-xl sm:text-xl md:text-xl text-text-900 font-bold">
            Graphic designer with a developer's eye for detail. I craft brand identities and
            editorial layouts, and build the systems that bring them to life on the web.
          </p>
          <div class="flex justify-start md:justify-end">
            <RouterLink
              to="/about"
              class="inline-block bg-neutral-900 px-4 py-2 border-3 border-neutral-900 text-text-000"
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
    <div class="max-w-7xl mx-auto py-8 px-6">
      <ul class="flex flex-wrap justify-between text-lg gap-10 text-text-700">
        <li>print & branding</li>
        <li>editorial</li>
        <li>ux/ui</li>
        <li>web development</li>
        <li>more →</li>
      </ul>
    </div>
  </section>

  <!-- Project preview -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
    <!--Project header -->
    <div class="bg-neutral-900 md:py-10">
      <div class="flex flex-col gap-2 pb-4">
        <p class="text-brand-primary text-lg">design.build.deliver</p>
        <div class="flex flex-wrap justify-between gap-6">
          <h2 class="text-text-000 text-4xl font-header font-bold">PROJECT PREVIEW</h2>
          <RouterLink
            to="Project"
            class="inline-block bg-neutral-900 px-4 py-2 border-3 border-brand-primary text-text-000"
            >more projects →</RouterLink
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-row gap-5 items-start hover:"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <!--left side -->
      <div id="info-section" class="w-1/2">
        <div class="flex flex-col gap-2.5">
          <div
            v-for="(project, index) in projectPreviewData"
            :key="project.id"
            class="h-10 w-auto transition-colors duration-300 cursor-pointer"
            :class="[
              index === activeIndex ? 'bg-brand-primary' : 'bg-neutral-000',
              barOpacities[index],
            ]"
            @click="goToIndex(index)"
          ></div>
          <!--Info Section-->
          <div class="bg-neutral-000 px-3.5 py-4 flex flex-col gap-6">
            <Transition name="fade" mode="out-in">
              <div :key="activeIndex" class="space-y-2">
                <h3 class="text-2xl font-bold">{{ activeProject.name }}</h3>
                <p class="text-lg h-47 font-medium">
                  {{ activeProject.description }}
                </p>
              </div>
            </Transition>
            <!--Tools-->
            <TransitionGroup
              name="fade-tools"
              tag="div"
              class="h-15 bg-neutral-900 flex flex-row gap-2 p-2 justify-end items-center"
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
      <div id="project-img" class="w-1/2">
        <Transition name="fade" mode="out-in">
          <img
            :key="activeIndex"
            :src="activeProject.img"
            alt="project"
            class="h-136 w-full object-cover"
          />
        </Transition>
      </div>
    </div>
  </section>

  <!--Q-->
  <section class="bg-brand-primary flex items-center">
    <div class="max-w-7xl mx-auto h-10"></div>
  </section>

  <!--Contact Section-->
  <section class="bg-neutral-300">
    <FormComponent />
  </section>
</template>
