<script setup lang="ts">
import { ref } from 'vue'

const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

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
      <div class="bg-neutral-000 text-neutral-300 w-full sm:w-1/2 relative p-2">
        <!--Success message-->
        <div
          v-if="submitStatus === 'success'"
          class="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6"
        >
          <p class="text-4xl font-bold">Thank You!</p>
          <p class="text-lg">I'll get back to you soon.</p>
        </div>

        <!--Form-->
        <form v-else class="w-full h-full p-6 flex flex-col gap-3" @submit.prevent="handleSubmit">
          <input
            type="text"
            name="Subject"
            placeholder="subject"
            class="bg-neutral-300 text-neutral-900 px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            class="bg-neutral-300 text-neutral-900 px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="message"
            class="bg-neutral-300 text-neutral-900 px-3 py-2 flex-1 resize-none"
          ></textarea>
          <button
            type="submit"
            class="bg-neutral-900 px-4 py-2 font-medium self-start hover:bg-brand-primary text-text-000 transition-colors"
          >
            send →
          </button>
        </form>
      </div>

      <!--Right side: socials + open for work, stacked -->
      <div class="w-full sm:w-1/2 flex flex-col gap-6">
        <!--Socials-->
        <div
          class="bg-brand-primary text-neutral-300 flex flex-col items-center justify-center gap-3 flex-1 px-4 py-6"
        >
          <p class="text-lg font-bold">socials</p>
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
        </div>

        <!--Third square-->
        <div
          class="bg-brand-primary text-neutral-300 flex flex-col items-center justify-center gap-3 flex-1 px-4 py-6"
        >
          <p class="text-lg font-bold text-center">
            Open for work: <br />
            Remote / Hybrid / Onsite
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
