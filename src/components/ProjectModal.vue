<script setup lang="ts">
import ArcaneDetail from '@/components/project-details/ArcaneDetail.vue'
import SwiftDetail from '@/components/project-details/SwiftDetail.vue'
import WildWhispers from './project-details/WildWhispersDetails.vue'
import SketchDetails from './project-details/SketchDetails.vue'

defineProps<{ selectedSlug: string | null }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="selectedSlug !== null"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-0 sm:p-6"
      @click.self="emit('close')"
    >
      <div
        class="bg-neutral-000 w-full h-full sm:w-[85vw] sm:h-[90vh] relative border-3 border-neutral-000 sm:rounded-sm"
      >
        <button
          type="button"
          class="absolute top-3 right-4 sm:top-4 sm:right-8 text-neutral-900 hover:text-brand-primary z-10"
          @click="emit('close')"
        >
          <p class="text-4xl sm:text-6xl">x</p>
        </button>

        <div class="w-full h-full overflow-y-auto overscroll-contain p-4 sm:p-8">
          <div class="mx-auto px-2 sm:px-10 transition-all duration-1000">
            <ArcaneDetail v-if="selectedSlug === 'arcane'" />
            <SwiftDetail v-if="selectedSlug === 'swift'" />
            <WildWhispers v-if="selectedSlug === 'wild'" />
            <SketchDetails v-if="selectedSlug === 'sketch'" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>
