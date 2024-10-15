<template>
  <NuxtLink
    v-if="!route?.disabled"
    :to="route.path"
    class="hover:text-green-500"
    @click="handleClick"
  >
    {{ route.label }}
  </NuxtLink>
</template>
  
<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { type Route } from '~/types/route'
  const event = "linkClicked"
  const emit = defineEmits([event]); // Define the event
  const handleClick = () => {
    emit(event, true);
  }
  const props = defineProps<{
    route: Route,
  }>()
</script>