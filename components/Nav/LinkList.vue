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

<template>
  <ul :class="props.class">
    <li v-for="(route, name) of props.routes">
      <NavLink
      v-if="!route?.disabled"
      :key="name"
      :route="route"
      @linkClicked="handleClick"
      />
    </li>
    <li>
      <NavColorToggle />
    </li>
  </ul>
</template>
  