<template>
    <NuxtImg :src="src" alt="Icon" class="max-w-32 w-28 md:w-30 lg:w-32 xl:w-38" />
</template>
    
<script lang="ts" setup>    
    const props = defineProps<{
      src:string,
    }>()
</script>