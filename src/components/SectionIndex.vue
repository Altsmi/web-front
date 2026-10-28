<script setup lang="ts">
defineProps<{
  items: { id: string; label: string }[]
  active: string
}>()

function go(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <!-- Mobile and tablet: chips -->
  <nav
    aria-label="Case study sections"
    class="sticky top-0 z-10 -mx-4 overflow-x-auto border-b border-project-dividers bg-project-bg px-4 py-3 md:-mx-10 md:px-10 lg:hidden"
  >
    <ul class="flex gap-2">
      <li v-for="item in items" :key="item.id" class="shrink-0">
        <button
          type="button"
          :aria-current="item.id === active ? 'true' : undefined"
          class="text-ui min-h-11 border rounded border-project-text px-3 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
          :class="item.id === active ? 'bg-project-text text-project-bg' : ''"
          @click="go(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>

  <!-- Desktop: sticky list -->
  <nav aria-label="Case study sections" class="sticky top-8 hidden self-start lg:block">
    <p class="text-caption mb-3 text-project-muted">CONTENTS</p>
    <ul class="border-l border-project-dividers">
      <li v-for="item in items" :key="item.id">
        <button
          type="button"
          :aria-current="item.id === active ? 'true' : undefined"
          class="text-ui -ml-px block w-full border-l-2 py-2 pl-4 text-left transition-colors hover:text-project-accents focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-project-accents"
          :class="
            item.id === active
              ? 'border-project-accents text-project-labels'
              : 'border-transparent text-project-muted'
          "
          @click="go(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>
