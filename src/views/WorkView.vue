<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import PageTransition from '@/components/PageTransition.vue'
import WorkNav from '@/components/WorkNav.vue'

const route = useRoute()
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <WorkNav />

    <div class="flex flex-1 flex-col">
      <RouterView v-slot="{ Component }">
        <PageTransition>
          <component :is="Component" :key="route.fullPath" />
        </PageTransition>
      </RouterView>
    </div>
  </div>
</template>
