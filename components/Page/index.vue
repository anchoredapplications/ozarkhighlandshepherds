<template>
    <div class="min-h-screen flex flex-col md:flex-row dark:bg-neutral-900 dark:text-neutral-200" :class="[{'md:flex-row-reverse':isFlipped}]">
      <!-- Image Column (Becomes full width on small screens) -->
      <div class="md:w-1/2 w-full">
        <NuxtImg 
          :src="image" 
          alt="Column Image" 
          class="w-full h-full object-cover max-h-82 md:max-h-full lg:aspect-square"
          format="webp"
         />
      </div>
  
      <!-- Text Column (Becomes full width on small screens) -->
      <div class="w-full flex items-center justify-center p-8 border-slate-300 border-t shadow-t md:py-20 md:border-l md:shadow-l-inset md:w-1/2" :class="[{'md:border-r md:shadow-r-inset':isFlipped}]">
        <div class="text-lg">
          <slot></slot>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts" setup>
  const props = defineProps<{image: string, isFlipped?: boolean}>();
</script>

