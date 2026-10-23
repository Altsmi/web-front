<template>
  <div
    class="flex flex-col gap-6 w-100 max-w-full min-h-130 bg-project-cards p-6 rounded shadow-lg border border-project-dividers"
  >
    <slot />

    <div class="flex flex-col gap-4">
      <p class="text-caption text-project-labels"><slot name="caption" /></p>
      <p class="text-card-title"><slot name="cardTitle" /></p>
    </div>
    <div class="flex flex-col gap-4">
      <p><slot name="text" /></p>
      <p class="text-ui underline underline-offset-4"><slot name="link" /></p>
    </div>
  </div>
</template>
