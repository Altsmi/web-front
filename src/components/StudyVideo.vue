<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{ src: string; poster: string; label: string }>()

const video = ref<HTMLVideoElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const element = video.value
  if (!element) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) element.play().catch(() => {})
      else element.pause()
    },
    { threshold: 0.5 },
  )
  observer.observe(element)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <video
    ref="video"
    :src="src"
    :poster="poster"
    :aria-label="label"
    class="block aspect-square w-full bg-paper"
    muted
    loop
    playsinline
    controls
    preload="metadata"
  ></video>
</template>
