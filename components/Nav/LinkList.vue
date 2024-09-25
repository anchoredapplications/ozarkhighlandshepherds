<template>
  <div :class="class">
    <NavLink
      v-for="(route, name) in routes"
      :key="name"
      :route="route"
    />
    <NavColorToggle />
  </div>
</template>
  
<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { type Route } from '~/types/route'
  
  // Define the props for the LinkList component
  const props = defineProps<{
    class:string,
    routes: Record<string, Route>
  }>()
</script>