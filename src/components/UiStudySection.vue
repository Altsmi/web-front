<script setup lang="ts">
import { ref } from 'vue'
import StudyVideo from '@/components/StudyVideo.vue'
import ZoomImage from '@/components/ZoomImage.vue'
import type { UiStudy } from '@/data/uiStudies'

defineProps<{ study: UiStudy }>()

const open = ref(false)
const frameIndex = ref(0)
</script>

<template>
  <section :id="study.id" :aria-labelledby="`${study.id}-title`" class="scroll-mt-8 space-y-6">
    <header class="rule-top flex items-baseline gap-4 pt-4 md:gap-6">
      <span class="text-caption text-quiet" aria-hidden="true">
        [{{ String(study.number).padStart(2, '0') }}]
      </span>
      <h2 :id="`${study.id}-title`" class="text-section">{{ study.title }}</h2>
    </header>

    <div class="grid gap-6 bg-soft p-5 md:p-8 lg:grid-cols-[3fr_2fr] lg:items-center xl:gap-10">
      <StudyVideo :src="study.video.src" :poster="study.video.poster" :label="study.video.label" />

      <div class="min-w-0 space-y-6">
        <p class="text-lead max-w-prose">{{ study.intro }}</p>

        <dl class="divide-y divide-line border-y border-line">
          <div class="space-y-1 py-4">
            <dt class="text-ui text-quiet text-sm">Problem</dt>
            <dd>{{ study.problem }}</dd>
          </div>
          <div class="space-y-1 py-4">
            <dt class="text-ui text-quiet text-sm">Decision</dt>
            <dd>{{ study.decision }}</dd>
          </div>
        </dl>

        <button
          type="button"
          :aria-expanded="open"
          :aria-controls="`${study.id}-details`"
          class="btn btn-outline"
          @click="open = !open"
        >
          {{ open ? 'Hide details −' : 'See details +' }}
        </button>
      </div>
    </div>

    <div
      v-if="open"
      :id="`${study.id}-details`"
      role="region"
      :aria-label="`${study.title} details`"
      class="grid gap-8 pt-2 pb-8 lg:grid-cols-[3fr_2fr] xl:gap-10"
    >
      <div class="min-w-0 space-y-4">
        <ul class="flex flex-wrap gap-2">
          <li v-for="(frame, index) in study.frames" :key="frame.id">
            <button
              type="button"
              :aria-pressed="frameIndex === index"
              class="btn px-4 py-2 text-sm"
              :class="frameIndex === index ? 'btn-solid' : 'btn-outline'"
              @click="frameIndex = index"
            >
              {{ frame.label }}
            </button>
          </li>
        </ul>
        <ZoomImage
          :key="study.frames[frameIndex]!.src"
          :src="study.frames[frameIndex]!.src"
          :alt="study.frames[frameIndex]!.alt"
        />
      </div>

      <div class="min-w-0 space-y-4">
        <p class="text-ui text-quiet text-sm">More decisions</p>
        <ul class="divide-y divide-line border-y border-line">
          <li v-for="note in study.notes" :key="note.label" class="space-y-1 py-4">
            <p class="text-card-title">{{ note.label }}</p>
            <p>{{ note.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
