<script setup lang="ts">
import { computed, ref } from 'vue'
import ZoomImage from '@/components/ZoomImage.vue'
import BlockRenderer from '@/components/blocks/BlockRenderer.vue'
import type { Block } from '@/data/blocks'
import type { Phase } from '@/data/study'

const props = defineProps<{ phase: Phase }>()

const groups = computed(() => {
  const result: { label: string; blocks: Block[] }[] = []
  for (const block of props.phase.details) {
    const last = result[result.length - 1]
    if (block.topic) result.push({ label: block.topic, blocks: [block] })
    else if (last) last.blocks.push(block)
    else result.push({ label: 'Details', blocks: [block] })
  }
  return result
})

const openIndex = ref<number | null>(props.phase.defaultOpen ? 0 : null)

const openGroup = computed(() =>
  openIndex.value === null ? undefined : groups.value[openIndex.value],
)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section
    :id="phase.id"
    :aria-labelledby="`${phase.id}-title`"
    class="scroll-mt-20 space-y-6 lg:scroll-mt-8"
  >
    <header class="flex items-baseline gap-4 border-t-2 border-project-text pt-4 md:gap-6">
      <span
        v-if="phase.number"
        class="text-display leading-none text-project-accents"
        aria-hidden="true"
      >
        {{ String(phase.number).padStart(2, '0') }}
      </span>
      <h2 :id="`${phase.id}-title`">{{ phase.title }}</h2>
    </header>

    <div
      class="grid gap-6 border border-project-dividers bg-project-cards p-5 md:p-8 xl:gap-10"
      :class="phase.visual?.length ? 'xl:grid-cols-[3fr_2fr]' : ''"
    >
      <div class="min-w-0 space-y-6">
        <p class="text-lead max-w-prose">{{ phase.takeaway }}</p>
        <ul class="divide-y divide-project-dividers border-y border-project-dividers">
          <li v-for="point in phase.points" :key="point" class="py-3">{{ point }}</li>
        </ul>
      </div>

      <div v-if="phase.visual?.length" class="min-w-0 space-y-4">
        <ZoomImage
          v-for="image in phase.visual"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          :caption="image.caption"
        />
      </div>
    </div>

    <div v-if="groups.length" class="space-y-4">
      <p class="text-caption text-project-labels">DETAILS</p>
      <ul class="flex flex-wrap gap-2">
        <li v-for="(group, index) in groups" :key="group.label">
          <button
            :id="`${phase.id}-tab-${index}`"
            type="button"
            :aria-expanded="openIndex === index"
            :aria-controls="`${phase.id}-panel`"
            class="text-ui min-h-11 rounded border px-4 transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
            :class="
              openIndex === index
                ? 'border-project-text bg-project-text text-project-bg'
                : 'border-project-text hover:border-project-accents hover:text-project-accents'
            "
            @click="toggle(index)"
          >
            {{ group.label }}
          </button>
        </li>
      </ul>

      <div
        v-if="openGroup"
        :id="`${phase.id}-panel`"
        role="region"
        :aria-labelledby="`${phase.id}-tab-${openIndex}`"
        class="pt-4 pb-8"
      >
        <BlockRenderer :blocks="openGroup.blocks" />
      </div>
    </div>
  </section>
</template>
