<template>
    <div class="min-h-screen flex flex-col md:flex-row dark:bg-neutral-900 dark:text-neutral-200" :class="[{'md:flex-row-reverse':isFlipped}]">
      <!-- Image Column (Becomes full width on small screens) -->
      <div class="md:w-1/2 w-full">
        <NuxtImg :src="image" alt="Column Image" class="pt-12 w-full h-full object-cover" />
      </div>
  
      <!-- Text Column (Becomes full width on small screens) -->
      <div class="w-full flex items-center justify-center p-8 border-black border-t shadow-t md:py-20 md:border-l md:shadow-l-inset md:w-1/2" :class="[{'md:border-r md:shadow-r-inset':isFlipped}]">
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

