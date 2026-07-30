<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-color-text-000 flex flex-col font-mono text-xl">
    <header class="bg-brand-primary border-b-3 border-neutral-900 py-6 sticky top-0 p-0 z-50">
      <nav class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-6">
        <div>
          <RouterLink to="/"
            ><img src="/logo_classic.svg" alt="Logo" class="h-10 w-auto"
          /></RouterLink>
        </div>
        <div class="flex gap-20">
          <button type="button" class="font-medium">menu</button>
          <button type="button" class="border-3 px-4 py-2 font-medium">reach out →</button>
        </div>
      </nav>
    </header>

    <main class="grow w-full">
      <RouterView />
    </main>

    <footer
      class="w-full bg-neutral-900 text-center p-6 border-t-3 border-brand-primary text-xl text-text-000"
    >
      <div class="max-w-5xl mx-auto flex justify-between items-center px-10 pt-8">
        <RouterLink to="/" class="hover:underline">
          <img src="/logo_orange.svg" alt="Logo" class="h-20 w-auto mx-auto" />
        </RouterLink>

        <nav>
          <ul class="flex flex-col gap-4 mt-2 text-left">
            <li><RouterLink to="/about" class="hover:underline">About</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:underline">Projects</RouterLink></li>
          </ul>
        </nav>
      </div>
      <div class="pt-8">
        &copy; {{ new Date().getFullYear() }} - Built with Vue 3, TS & ASP.NET <br />
        By Illya Shpylka
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
