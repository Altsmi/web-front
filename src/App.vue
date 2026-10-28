<script setup lang="ts">
import { RouterView } from 'vue-router'
import AboutFooter from '@/components/AboutFooter.vue'
import FooterDefault from '@/components/FooterDefault.vue'
import PageTransition from '@/components/PageTransition.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <RouterView v-slot="{ Component, route: viewRoute }">
      <PageTransition>
        <div :key="viewRoute.matched[0]?.path" class="flex flex-1 flex-col">
          <main class="flex flex-1 flex-col">
            <component :is="Component" />
          </main>

          <AboutFooter v-if="viewRoute.meta.footer === 'aboutFooter'" />
          <FooterDefault v-else-if="viewRoute.meta.footer === 'default'" />
        </div>
      </PageTransition>
    </RouterView>
  </div>
</template>
