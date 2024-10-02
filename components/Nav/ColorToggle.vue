<template>
  <UToggle
    on-icon="i-heroicons-sun"
    off-icon="i-heroicons-moon"
    v-model="isSelected"
    @change="onChange"
  />
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
  