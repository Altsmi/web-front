<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="menuRef">
    <button type="button" class="font-medium hover:underline transition-all" @click="toggleMenu">
      menu
    </button>

    <Transition name="menu-slide">
      <div
        v-if="isOpen"
        class="absolute top-full mt-2 right-0 bg-neutral-900 text-neutral-300 flex flex-col gap-2 p-4 w-50 z-70 transition-all"
      >
        <RouterLink to="/about" class="hover:text-brand-primary" @click="closeMenu"
          >about</RouterLink
        >
        <RouterLink to="/projects" class="hover:text-brand-primary" @click="closeMenu"
          >projects</RouterLink
        >
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
