<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, type ComponentPublicInstance } from 'vue'
import { projectPreviewData } from '@/data/ProjectPreviewData'

const activeProject = computed(() => projectPreviewData[activeIndex.value]!)
const stepRefs = ref<(HTMLElement | null)[]>([])
const activeIndex = ref(0)

function setStepRef(el: Element | ComponentPublicInstance | null, index: number) {
  stepRefs.value[index] = el as HTMLElement | null
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting)
      if (visibleEntries.length === 0) return

      const viewportCenter = window.innerHeight / 2

      let closestEntry = visibleEntries[0]
      let closestDistance = Math.abs(
        closestEntry!.boundingClientRect.top +
          closestEntry!.boundingClientRect.height / 2 -
          viewportCenter,
      )

      for (const entry of visibleEntries) {
        const entryCenter = entry.boundingClientRect.top + entry.boundingClientRect.height / 2
        const distance = Math.abs(entryCenter - viewportCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestEntry = entry
        }
      }

      const index = stepRefs.value.indexOf(closestEntry!.target as HTMLElement)
      if (index !== -1) activeIndex.value = index
    },
    {
      rootMargin: '-70% 0px -10% 0px',
      threshold: 0,
    },
  )

  stepRefs.value.forEach((el) => {
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

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

  <!-- Project preview Dekstop-->
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 pb-10 relative"
    :style="{ height: `${(projectPreviewData.length - 1) * 100 + 30}vh` }"
  >
    <!--Project header -->
    <div class="bg-neutral-900 sticky z-40 md:py-10" style="top: var(--nav-height)">
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
      class="flex flex-row gap-5 items-start"
      style="height: calc(100% - var(--project-header-height))"
    >
      <!--left side -->
      <div
        id="info-section"
        class="w-1/2 sticky"
        style="top: calc(var(--nav-height) + var(--project-header-height))"
      >
        <div class="flex flex-col gap-2.5">
          <div
            v-for="(project, index) in projectPreviewData"
            :key="project.id"
            class="h-10 w-auto transition-colors duration-300"
            :class="[
              index === activeIndex ? 'bg-brand-primary' : 'bg-neutral-000',
              barOpacities[index],
            ]"
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
      <div
        id="project-img"
        class="w-1/2 sticky"
        style="top: calc(var(--nav-height) + var(--project-header-height))"
      >
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

    <!--Sticky scroll -->
    <div class="absolute top-0 left-0 w-full">
      <div
        v-for="(step, index) in projectPreviewData"
        :key="step.id"
        class="h-screen"
        :ref="(el) => setStepRef(el, index)"
      ></div>
    </div>
  </section>
  <!--Quotation MAYBE?-->
  <section class="bg-neutral-300 h-50">
    <div class=""></div>
  </section>
  <!--Contact Section-->
  <section class="bg-neutral-900 h-300">
    <div></div>
  </section>
</template>
