<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
  // form submission logic goes here later (API call, emit event, etc.)
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>

<template>
  <div class="max-w-7xl mx-auto pt-10 px-4 sm:px-6 md:pt-10 space-y-6">
    <h1
      class="font-black text-text-900 tracking-tight font-header text-6xl sm:text-6xl md:text-6xl"
    >
      OPEN TO NEW OPPORTUNITIES
    </h1>
    <p>
      Open to full-time roles and freelance projects. Reach out and I'll get back to you within a
      day.
    </p>
  </div>
  <div class="max-w-7xl mx-auto py-5 px-4 sm:px-6 md:py-10 space-y-6">
    <form action="" class="space-y-2">
      <!--Name-->
      <div class="flex flex-col gap-2">
        <label for="name" class="font-medium">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="border-3 border-neutral-900 px-3 py-2 bg-neutral-000"
        />
      </div>
      <!--Email-->
      <div class="flex flex-col gap-2">
        <label for="email" class="font-medium">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="border-3 border-neutral-900 px-3 py-2 bg-neutral-000"
        />
      </div>
      <!--Message box-->
      <div class="flex flex-col gap-2">
        <label for="message" class="font-medium">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          required
          class="border-3 border-neutral-900 px-3 py-2 bg-neutral-000 resize-none"
        ></textarea>
      </div>
      <!--submit button-->
      <button
        type="submit"
        class="bg-neutral-900 text-text-000 px-4 py-2 border-3 border-brand-primary self-start"
      >
        send →
      </button>
    </form>
  </div>
</template>
