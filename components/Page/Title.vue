<template>
    <h1 class="text-4xl font-bold mb-4">{{ content }}</h1>
</template>
  
<script lang="ts" setup>
    const props = defineProps<{
        content: string
    }>();
</script>
