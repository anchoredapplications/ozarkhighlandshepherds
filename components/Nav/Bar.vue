<template>
    <nav class="fixed h-[64px] w-full p-4 bg-white border-b shadow-xl dark:bg-neutral-900">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-lg font-bold">Kennel App</NuxtLink>
        <NavLinkList class="hidden justify-center items-center gap-4 md:flex" :routes="routes" />
        <button @click="toggleMenu" :class="['z-50 transition-all md:hidden focus:outline-none', { 'rotate-90': isMenuOpen }]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <NavLinkList :routes="routes" v-if="isMenuOpen" class="absolute z-10 flex flex-col gap-4 justify-center items-center w-full left-0 top-0 border-2 bg-neutral-50 pb-4 pt-8 md:hidden dark:bg-slate-900" />
    </nav>
  </template>
  
  <script lang="ts" setup>
  import { routes } from '@/globals/routes' 
  
  const isMenuOpen = ref(false)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

  