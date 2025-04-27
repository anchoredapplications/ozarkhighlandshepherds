<template>
    <button
      @click="onClick"
      :aria-label="ariaLabel"
      class="inline-flex items-center justify-center rounded-full p-2 bg-gray-800 hover:bg-gray-700 text-white transition"
    >
      <slot />
    </button>
  </template>
  
  <script setup>
  defineProps({
    onClick: Function,
    ariaLabel: String
  })
  </script>
  