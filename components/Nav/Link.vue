<template>
  <NuxtLink
    :to="route.path"
    class="hover:text-green-500"
  >
    {{ route.label }}
  </NuxtLink>
</template>
  
<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { type Route } from '~/types/route'
  
  // Define the props for the Link component
  const props = defineProps<{
    route: Route
  }>()
</script>