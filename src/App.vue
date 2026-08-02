<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-color-text-000 flex flex-col font-mono text-xl">
    <header class="bg-neutral-000 border-b-3 border-neutral-900 py-6 sticky top-0 p-0 z-50">
      <nav class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-6">
        <div>
          <RouterLink to="/"
            ><img src="/logo_classic.svg" alt="Logo" class="h-10 w-auto"
          /></RouterLink>
        </div>
        <div class="flex gap-20">
          <button type="button" class="font-medium hover:underline">menu</button>
          <button type="button" class="border-3 px-4 py-2 font-medium">reach out →</button>
        </div>
      </nav>
    </header>

    <main class="grow w-full">
      <RouterView />
    </main>

    <footer class="w-full bg-neutral-900 text-center p-6 text-xl text-text-000">
      <div class="">
        &copy; {{ new Date().getFullYear() }} - Built with Vue 3, TS & ASP.NET By Illya Shpylka
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
