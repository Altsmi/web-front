<script setup lang="ts"></script>
<template>
  <div class="bg-neutral-900 px-10 py-10 space-y-3">
    <!--Position-->
    <h3 class="text-4xl text-brand-primary font-medium"><slot name="position"></slot></h3>
    <!--Year-->
    <p class="text-lg text-neutral-300"><slot name="year"></slot></p>
    <!--Description-->
    <p class="text-neutral-000 pt-10"><slot name="description"></slot></p>
  </div>
</template>
