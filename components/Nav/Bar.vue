<template>
    <nav class="static h-[64px] w-full min-w-64 p-2 bg-white border-b shadow-xl md:fixed dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-500">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-2 pb-2 text-lg font-light font-bold font-serif leading-snug md:text-xl">
          <NuxtImg src="/highland.png" :width="45" :height="45" alt="Home Icon" class="rounded-full border-2 border-black" format="webp"/>
          {{ en.title }}
        </NuxtLink>
        <NavLinkList @linkClicked="toggleMenu" class="hidden justify-center items-center gap-4 md:flex" :routes="routes" />
        <button @click="toggleMenu" :aria-label="en.menu" :class="['z-50 pr-2 pb-2 flex items-center transition-all md:hidden focus:outline-none', { 'rotate-90': isMenuOpen }]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <NavLinkList @linkClicked="toggleMenu" :routes="routes" v-if="isMenuOpen" class="absolute z-10 flex flex-col gap-4 justify-center items-center w-full left-0 top-0 border-b-2 bg-neutral-50 pb-4 pt-8 md:hidden dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-500" />
    </nav>
  </template>
  
  <script lang="ts" setup>
  import { getRoutes } from '~/globals/routes' 
  import en from '~/assets/en.json' 
  const routes = getRoutes()
  const isMenuOpen = ref(false)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

  