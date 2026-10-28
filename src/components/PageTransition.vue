<script setup lang="ts">
import { pageLeft } from '@/router/scrollSignal'
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-2 motion-reduce:translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0"
    @after-leave="pageLeft"
  >
    <slot />
  </Transition>
</template>
