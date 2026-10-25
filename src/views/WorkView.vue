<script setup lang="ts">
import WorkNav from '@/components/WorkNav.vue'
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <WorkNav />

    <main class="flex flex-1 flex-col">
      <RouterView />
    </main>
  </div>
</template>
