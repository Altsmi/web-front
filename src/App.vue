<script setup lang="ts">
import { RouterView } from 'vue-router'
import GalleryViewer from '@/components/GalleryViewer.vue'
import PageTransition from '@/components/PageTransition.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteNav />

    <RouterView v-slot="{ Component, route: viewRoute }">
      <PageTransition>
        <div :key="viewRoute.matched[0]?.path" class="flex flex-1 flex-col">
          <main class="flex flex-1 flex-col">
            <component :is="Component" />
          </main>
          <SiteFooter />
        </div>
      </PageTransition>
    </RouterView>

    <GalleryViewer />
    <div class="grain" aria-hidden="true"></div>
  </div>
</template>
