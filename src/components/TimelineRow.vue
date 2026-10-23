<script setup lang="ts">
defineProps<{
  date: string
  title: string
  meta?: string
}>()
</script>

<template>
  <li class="py-5 md:py-6">
    <div class="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-x-6 lg:grid-cols-[12rem_1fr] lg:gap-x-10">
      <p class="font-sans text-caption">{{ date }}</p>

      <div class="min-w-0 space-y-3 md:border-l md:border-project-dividers sm:pl-5 lg:pl-20">
        <div class="space-y-1">
          <h3 class="text-[1.375rem]/[1.75rem] font-semibold md:text-[1.75rem]/[2.125rem]">
            {{ title }}
          </h3>
          <p v-if="meta" class="font-sans text-[0.8125rem] text-project-muted">{{ meta }}</p>
        </div>
        <p v-if="$slots.default" class="font-sans text-[0.9375rem]">
          <slot />
        </p>
      </div>
    </div>
  </li>
</template>
