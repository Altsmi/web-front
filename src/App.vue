<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ContactSection from './components/ContactSection.vue'

const isMobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (headerRef.value && !headerRef.value.contains(event.target as Node)) {
    closeMobileMenu()
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
  <div class="min-h-screen bg-neutral-900 text-color-text-000 flex flex-col font-mono text-xl">
    <header
      ref="headerRef"
      class="bg-neutral-000 border-b-3 border-neutral-900 py-6 sticky top-0 p-0 z-50 relative"
    >
      <nav class="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div>
          <RouterLink to="/"
            ><img src="/logo_classic.svg" alt="Logo" class="h-10 w-auto"
          /></RouterLink>
        </div>

        <div class="hidden md:flex space-x-20 items-center">
          <RouterLink to="/" class="hover:text-brand-primary hidden lg:block">home</RouterLink>
          <RouterLink to="/about" class="hover:text-brand-primary">about</RouterLink>
          <button
            type="button"
            @click="scrollToContact"
            class="border-3 px-4 py-2 rounded-sm font-medium hover:bg-neutral-900 hover:text-text-000 hover:border-neutral-900 transition-all duration-200"
          >
            reach out →
          </button>
        </div>

        <button
          type="button"
          class="md:hidden text-5xl font-medium transition-all"
          @click="toggleMobileMenu"
        >
          <p :class="isMobileMenuOpen ? 'text-brand-primary' : ''">
            {{ isMobileMenuOpen ? 'x' : '=' }}
          </p>
        </button>
      </nav>

      <Transition name="mobile-menu">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 w-full flex flex-col gap-10 p-20 bg-neutral-000 border-t-3 border-neutral-900 text-center"
        >
          <RouterLink to="/" class="hover:text-brand-primary" @click="closeMobileMenu"
            >home</RouterLink
          >
          <RouterLink to="/about" class="hover:text-brand-primary" @click="closeMobileMenu"
            >about</RouterLink
          >

          <button
            type="button"
            @click="scrollToContact"
            class="border-3 px-4 py-2 rounded-sm font-medium"
          >
            reach out →
          </button>
        </div>
      </Transition>
    </header>

    <main class="grow w-full">
      <RouterView />
    </main>
    <section>
      <ContactSection id="contact" />
    </section>
    <footer class="w-full bg-neutral-900 text-center p-6 text-xl text-text-000">
      <div class="">
        &copy; {{ new Date().getFullYear() }} - Built with Vue 3, TS & ASP.NET By Illya Shpylka
      </div>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 6px;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
