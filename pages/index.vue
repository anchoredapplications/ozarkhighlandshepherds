<template>
  <Page image="/image.png" :isFlipped="false">
    <h1 class="text-4xl font-bold mb-4">Welcome to [Kennel Name]</h1>
    <div class="flex flex-col gap-6">
      <p>
        At [Kennel Name], we are dedicated to breeding and raising exceptional German Shepherds. With a passion for this remarkable breed, we focus on nurturing both their strength and loyalty, ensuring they are well-prepared to be both reliable companions and protectors.
      </p>
      <p>
        Our German Shepherds are raised with care, socialized from an early age, and receive top-quality training to bring out their natural intelligence, agility, and obedience. Whether you're looking for a family pet, a working dog, or a loyal protector, we have the right companion for you.
      </p>
      <p>
        Discover the [Kennel Name] difference – where tradition meets excellence, and every dog is treated as part of the family.
      </p>
    </div>
  </Page>
</template>
  
<script lang="ts" setup>

</script>
  
<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 2rem;
    margin-top: 20px;
  }
  
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
</style>
  