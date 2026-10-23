<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1 flex flex-col w-full">
      <RouterView />
    </main>

    <FooterDefault v-if="route.meta.footer === 'default'" />
  </div>
</template>
<style scoped></style>
