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
    class="rule-top grid scroll-mt-8 gap-6 pt-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[16rem_minmax(0,1fr)]"
  >
    <header class="space-y-1">
      <h2 :id="`${phase.id}-title`" class="text-section">{{ phase.title }}</h2>
    </header>

    <div class="min-w-0 space-y-10">
      <div class="space-y-6">
        <p class="text-lead max-w-3xl">{{ phase.takeaway }}</p>
        <ul class="border-t border-line">
          <li v-for="point in phase.points" :key="point" class="border-b border-line py-3">
            {{ point }}
          </li>
        </ul>
      </div>

      <div v-if="phase.visual?.length" class="space-y-4">
        <ZoomImage
          v-for="image in phase.visual"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          :caption="image.caption"
          :tall="image.tall"
        />
      </div>

      <div v-if="groups.length" class="space-y-4">
        <p class="text-ui text-quiet text-sm">Details</p>
        <ul class="flex flex-wrap gap-2">
          <li v-for="(group, index) in groups" :key="group.label">
            <button
              :id="`${phase.id}-tab-${index}`"
              type="button"
              :aria-expanded="openIndex === index"
              :aria-controls="`${phase.id}-panel`"
              class="btn px-4 py-2 text-sm"
              :class="openIndex === index ? 'btn-solid' : 'btn-outline'"
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
    </div>
  </section>
</template>
