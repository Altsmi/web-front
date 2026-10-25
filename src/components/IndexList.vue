<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="group flex w-full flex-1 flex-col gap-6 px-4 py-8 transition-colors hover:bg-project-cards focus-visible:bg-project-cards focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-project-accents md:px-10 lg:grid lg:grid-cols-[8rem_1fr_20rem] lg:items-stretch lg:gap-10 lg:px-20 lg:py-6 short:lg:py-4"
  >
    <!-- Number -->
    <span
      class="text-display leading-none lg:self-center short:lg:text-[3.5rem]"
      aria-hidden="true"
    >
      <slot name="number" />
    </span>

    <!-- Text block -->
    <div class="space-y-3 lg:self-center short:lg:space-y-2">
      <p class="text-caption text-project-labels"><slot name="caption" /></p>
      <h3 class="text-[1.5rem]/[1.875rem] font-semibold md:text-[1.75rem]/[2.125rem]">
        <slot name="name" />
      </h3>
      <p class="max-w-md short:lg:line-clamp-1"><slot name="text" /></p>
    </div>

    <!-- Image + link -->
    <div class="flex min-h-0 flex-col gap-3">
      <div
        class="relative aspect-16/10 w-full overflow-hidden border border-project-dividers lg:aspect-auto lg:min-h-24 lg:flex-1 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
      >
        <slot />
      </div>
      <span
        class="text-ui block underline underline-offset-4 transition-colors group-hover:text-project-accents group-focus-visible:text-project-accents lg:text-right"
        aria-hidden="true"
      >
        <slot name="link" />
      </span>
    </div>
  </RouterLink>
</template>
