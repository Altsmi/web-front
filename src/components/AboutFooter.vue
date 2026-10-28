<script setup lang="ts"></script>

<template>
  <footer class="mt-auto px-4 pt-10 pb-6 md:px-10 lg:px-20">
    <div class="space-y-8 rounded bg-project-text p-6 text-project-bg md:p-10">
      <div class="space-y-4">
        <h2>Let’s work together.</h2>
        <p class="text-lead">Open to junior UX/UI roles · Remote / Hybrid / Onsite</p>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row">
        <RouterLink
          to="/"
          class="text-ui rounded border border-project-bg bg-project-bg px-5 py-3 text-center text-project-text focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          View my work
        </RouterLink>

        <a
          href="mailto:your@email.com"
          class="text-ui rounded border border-project-bg px-5 py-3 text-center focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
        >
          Reach out
        </a>
      </div>

      <nav aria-label="Social links" class="flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="text-ui underline underline-offset-4"
        >
          GitHub
        </a>
      </nav>
    </div>
  </footer>
</template>
