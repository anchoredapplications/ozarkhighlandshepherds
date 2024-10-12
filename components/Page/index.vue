<template>
    <div  class="min-h-screen flex flex-col md:flex-row" :class="[{'md:flex-row-reverse':isFlipped}]">
      <!-- Image Column (Becomes full width on small screens) -->
      <div class="md:w-1/2 w-full">
        <NuxtImg :src="image" alt="Column Image" class="w-full h-full object-cover" />
      </div>
  
      <!-- Text Column (Becomes full width on small screens) -->
      <div class="md:w-1/2 w-full flex items-center justify-center p-8 border-black border-t shadow-t md:border-l md:shadow-l-inset" :class="[{'md:border-r md:shadow-r-inset':isFlipped}]">
        <div class="text-lg">
          <slot></slot>
        </div>
      </div>
    </div>
</template>
  

<script lang="ts" setup>

// Define props
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  isFlipped: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped>
/* You can add any custom styles here if necessary */
</style>
