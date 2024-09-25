<template>
  <USelect
    color="primary"
    variant="outline"
    option-attribute="name"
    :options="themes"
    @change="onChange"
  />
</template>
  
<script setup lang="ts">  
  const colorMode = useColorMode()
  const themes = [{
    name: 'Light',
    value: 'light'
  }, {
    name: 'Dark',
    value: 'dark',
  }]

  const onChange = (value) => {
    colorMode.preference = value
  }
</script>
  