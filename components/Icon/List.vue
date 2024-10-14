<template>
   <div class="flex flex-row flex-wrap gap-6 py-6 justify-around items-center">
        <Icon v-for="icon of icons" :src="icon" />
   </div>
</template>
    
<script lang="ts" setup>    
    const props = defineProps<{
      icons:string[],
    }>()
</script>