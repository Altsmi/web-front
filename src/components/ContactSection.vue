<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isEmailOpen = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

function toggleEmail() {
  isEmailOpen.value = !isEmailOpen.value
}

function closeEmail() {
  isEmailOpen.value = false
  submitStatus.value = 'idle'
}

async function handleSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    const response = await fetch('https://formspree.io/f/mgogjrgd', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.reset()
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  }
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
    <div class="flex flex-col sm:flex-row gap-6 h-80">
      <!--Email-->
      <div
        class="bg-brand-primary text-neutral-300 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 relative p-2"
        :class="isEmailOpen ? 'sm:w-1/2' : 'sm:w-1/3'"
        @click="!isEmailOpen && toggleEmail()"
      >
        <template v-if="!isEmailOpen">
          <img src="/icons/mail_icon.svg" alt="email" class="h-8 w-8" />
          <p class="text-lg font-bold">say hello</p>
        </template>

        <template v-else>
          <button
            type="button"
            class="absolute top-3 right-3 text-neutral-300 hover:text-brand-primary"
            @click.stop="closeEmail"
          >
            <img src="/icons/x_icon.svg" alt="close" class="h-5 w-5" />
          </button>

          <!--Success message-->
          <div
            v-if="submitStatus === 'success'"
            class="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6"
          >
            <p class="text-2xl font-bold">thank you!</p>
            <p class="text-lg">Your message has been sent — I'll get back to you soon.</p>
          </div>

          <!--Form-->
          <form
            v-else
            class="w-full h-full p-6 flex flex-col gap-3"
            @click.stop
            @submit.prevent="handleSubmit"
          >
            <input
              type="text"
              name="Subject"
              placeholder="subject"
              class="bg-neutral-000 text-neutral-900 px-3 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              class="bg-neutral-000 text-neutral-900 px-3 py-2"
            />
            <textarea
              name="message"
              placeholder="message"
              class="bg-neutral-000 text-neutral-900 px-3 py-2 flex-1 resize-none"
            ></textarea>
            <button
              type="submit"
              class="bg-neutral-900 text-text-300 px-4 py-2 font-medium self-start hover:bg-neutral-300 hover:text-text-900 transition-colors"
            >
              send →
            </button>
          </form>
        </template>
      </div>

      <!--Socials-->
      <div
        class="bg-neutral-900 text-neutral-300 flex flex-col items-center justify-center gap-3 transition-all duration-300 px-4 py-6"
        :class="isEmailOpen ? 'sm:w-1/4' : 'sm:w-1/3'"
      >
        <div class="flex gap-3">
          <a
            href="https://www.linkedin.com/in/illya-shpylka-a60315198/"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="/icons/link_icon.svg" class="h-6 w-6" alt="linkedin"
          /></a>
          <a href="https://github.com/Altsmi" target="_blank" rel="noopener noreferrer"
            ><img src="/icons/github_icon.svg" class="h-6 w-6" alt="github"
          /></a>
        </div>
        <p class="text-lg font-bold">socials</p>
      </div>

      <!--Third square-->
      <div
        class="bg-neutral-900 text-neutral-300 flex flex-col items-center justify-center gap-3 transition-all duration-300 px-4 py-6"
        :class="isEmailOpen ? 'sm:w-1/4' : 'sm:w-1/3'"
      >
        <p class="text-lg font-bold">
          Open for work: <br />
          Remote / Hybrid / Onsite
        </p>
      </div>
    </div>
  </section>
</template>
