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
        <a
          href="https://www.linkedin.com/in/illya-shpylka-a60315198/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui hover:underline hover:underline-offset-4"
          >Linkedin</a
        >
        <span class="text-project-dividers" aria-hidden="true">|</span>
        <a
          href="https://github.com/Altsmi"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui hover:underline hover:underline-offset-4"
          >GitHub</a
        >
        <span class="text-project-dividers" aria-hidden="true">|</span>
        <a
          href="mailto:illya.shpylka@gmail.com"
          class="text-ui hover:underline hover:underline-offset-4"
          >Email</a
        >
      </nav>

      <!-- Centre: link to About page -->
      <RouterLink to="/about">
        <h3 class="text-2xl md:text-[2.125rem] hover:underline hover:underline-offset-4">
          ABOUT ME
        </h3>
      </RouterLink>

      <!-- Resume: opens the PDF -->
      <div class="flex justify-center md:justify-end">
        <a
          href="/Illya_Shpylka_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui rounded border-3 border-project-text px-5 py-3 hover:bg-project-cards hover:border-project-cards hover:text-project-accents transition-all duration-150"
        >
          Resume ↗
        </a>
      </div>
    </div>
  </footer>
</template>
