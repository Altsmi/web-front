<script setup lang="ts">
// TypeScript click handler function
const handleClick = () => {
  console.log('✅ Click connection works perfectly!')
  alert('Component click event works!')
}
</script>

<template>
  <button 
    @click="handleClick"
    class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg transition"
  >
    Test Component Click
  </button>
</template>