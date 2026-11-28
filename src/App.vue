<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import GalleryViewer from '@/components/GalleryViewer.vue'
import PageTransition from '@/components/PageTransition.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'

// Case study pages have their own top (back arrow), so the site nav stays off.
const caseStudyRoutes = ['work-ux-ui-project', 'work-ux-ui-studies']
const route = useRoute()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteNav v-if="!caseStudyRoutes.includes(String(route.name))" />

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
