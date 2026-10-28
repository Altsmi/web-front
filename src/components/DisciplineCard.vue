<template>
  <div class="h-full rounded border border-project-dividers bg-project-cards p-5 md:p-8">
    <div class="space-y-6 pb-6">
      <div class="space-y-4">
        <p class="text-caption text-project-labels"><slot name="caption" /></p>
        <h3 class="text-card-title"><slot name="title" /></h3>
      </div>
      <p><slot name="text" /></p>
    </div>
    <slot />
  </div>
</template>
