<template>
  <Page :image="image" :isFlipped="true">
    <PageTitle :content="title"/>
    <PageText :content="content"/>
  </Page>
</template>
  
<script lang="ts" setup>
  import en from "~/assets/en.json"
  const { image, content, title } = en.faq
</script>
