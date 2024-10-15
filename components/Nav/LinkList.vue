<template>
  <div :class="class">
    <NavLink
      v-for="(route, name) of routes"
      v-if="!route?.disabled"
      :key="name"
      :route="route"
      @linkClicked="handleClick"
    />
    <NavColorToggle />
  </div>
</template>
  
<script lang="ts" setup>
  import { type Route } from '~/types/route'
  const event = "linkClicked"
  const emit = defineEmits([event]); // Define the event
  const handleClick = () => {
    emit(event, true);
  }
  const props = defineProps<{
    class:string,
    routes: Record<string, Route>,
    closeMenu?: () => boolean
  }>()
</script>