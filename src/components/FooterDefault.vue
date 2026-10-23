<script setup lang="ts"></script>

<template>
  <footer class="mt-auto border-t border-project-dividers">
    <div
      class="grid gap-6 px-6 py-8 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10 md:text-left lg:px-20"
    >
      <!-- Links -->
      <nav
        aria-label="Contact links"
        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start"
      >
        <a href="#" class="text-ui">Linkedin</a>
        <span class="text-project-dividers" aria-hidden="true">|</span>
        <a href="#" class="text-ui">GitHub</a>
        <span class="text-project-dividers" aria-hidden="true">|</span>
        <a href="mailto:" class="text-ui">Email</a>
      </nav>

      <!-- Centre: link to About page -->
      <RouterLink to="/about">
        <h3 class="text-2xl md:text-[2.125rem]">ABOUT ME</h3>
      </RouterLink>

      <!-- Resume: opens the PDF -->
      <div class="flex justify-center md:justify-end">
        <a
          href="/Illya_Shpylka_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui rounded border-3 border-project-text px-5 py-3"
        >
          Resume ↗
        </a>
      </div>
    </div>
  </footer>
</template>
