<template>
  <div
    class="relative w-16 h-8 shadow-inner flex items-center rounded-full cursor-pointer transition-all duration-300 "
    :class="{'bg-green-500': isSelected, 'bg-gray-800': !isSelected}"
    @click="isSelected = !isSelected; onChange(isSelected)"
  >
    <div
      class="absolute flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ease-in-out"
      :class="{'translate-x-full': isSelected, 'translate-x-0': !isSelected}"
    >
      <div
        class="h-6 w-6 rounded-full flex items-center justify-center"
        :class="{'bg-neutral-600': !isSelected, 'bg-neutral-100': isSelected}"
      >
        <NuxtImg
          v-if="!isSelected"
          src="/moon.svg"
          alt="Moon Icon"
          class="w-4 h-4"
        />
        <NuxtImg
          v-if="isSelected"
          src="/sun.svg"
          alt="Sun Icon"
          class="w-4 h-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isSelected = ref(false)
onMounted(() => {
  isSelected.value = (colorMode.value === "light")
})

const onChange = (value: string) => {
  colorMode.preference = !!value ? "light" : "dark"
}
</script>

