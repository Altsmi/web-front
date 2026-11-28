<script setup lang="ts"></script>

<template>
  <footer class="shell mt-24 md:mt-32">
    <div class="rule-top space-y-8 pt-8 pb-8 md:pb-10">
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <a
          href="mailto:illya.shpylka@gmail.com?subject=Hello%20Illya"
          class="display-caps text-cta transition-colors hover:text-accent"
        >
          Say hello.
        </a>

        <ul class="display-caps flex gap-6 text-xl md:flex-col md:items-end md:gap-2 md:text-2xl">
          <li>
            <a
              href="mailto:illya.shpylka@gmail.com?subject=Hello%20Illya"
              class="transition-colors hover:text-accent"
              >Email</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/illya-shpylka-a60315198/"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors hover:text-accent"
              >LinkedIn</a
            >
          </li>
          <li>
            <a
              href="/Illya_Shpylka_Resume_UX-UI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors hover:text-accent"
              >Resume</a
            >
          </li>
        </ul>
      </div>

      <div class="flex items-center justify-between gap-4 text-sm md:text-lg">
        <p class="uppercase">Toronto, ON</p>
        <img src="/logo_classic.svg" alt="" class="h-7 w-auto md:h-10" />
        <p>© 2026</p>
      </div>
    </div>
  </footer>
</template>
