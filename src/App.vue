<script setup lang="ts">
import { useRoute } from 'vue-router'
import FooterDefault from '@/components/FooterDefault.vue'
import AboutFooter from '@/components/AboutFooter.vue'

const route = useRoute()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main class="flex w-full flex-1 flex-col">
      <RouterView />
    </main>

    <FooterDefault v-if="route.meta.footer === 'default'" />
    <AboutFooter v-else-if="route.meta.footer === 'aboutFooter'" />
  </div>
</template>
