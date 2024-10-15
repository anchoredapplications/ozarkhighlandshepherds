<template>
  <Page :image="image" :isFlipped="false">
    <PageTitle :content="title"/>
    <PageText :content="content"/>
    <IconList :icons="['/custom_akc.svg','/breeding_rights.svg', '/vet_checked.svg']"/>
  </Page>
</template>
  
<script lang="ts" setup>
  import en from "~/assets/en.json"
  const { image, content, title } = en.welcome
</script>
