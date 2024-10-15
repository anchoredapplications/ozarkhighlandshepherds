<template>
    <Page :image="currentItem?.images?.[0]">
      <PageTitle :content="name" />
      <div class="flex flex-col-reverse gap-6 px-6 md:flex-col">
        <PageText :content="description"/>
        <div class="flex justify-between items-center md:mt-8">
          <UButton
            @click="previous"
            icon="i-heroicons-chevron-left"
            size="sm"
            variant="solid"
            class="rounded-full"
            aria-label="Previous"
            :trailing="false"
          />
          <p class="text-lg">{{ currentItem?.name }}</p>
          <UButton
            @click="next"
            icon="i-heroicons-chevron-right"
            size="sm"
            variant="solid"
            class="rounded-full"
            aria-label="Next"
            :trailing="false"
          />
        </div>
      </div>
    </Page>
</template>
    
<script lang="ts" setup>
    import { type Litter } from "~/types/litter"
    import { type Breed } from "~/types/breed"
    const props = defineProps<{
      litter?: Litter;
      breed?: Breed;
    }>();
    const name = ref('');
    const description = ref('');
    const currentIndex = ref<number>(0);
    const list = ref<any[]>([]);
    
    if (!!props.breed) {
      name.value = props.breed.name
      description.value = props.breed.description
      list.value = [{name: "All", images: [props.breed.photo]}, ...props.breed.litters]
    } else if (!!props.litter) {
      name.value = props.litter.name
      description.value = props.litter.description
      list.value = [{name: "All", images: [props.litter.photo]}, ...props.litter.puppies]
    }

    const currentItem = computed(() => list.value[currentIndex.value]);

    function previous() {
      currentIndex.value =
        (currentIndex.value - 1 + list.value.length) % list.value.length;
    }
    
    function next() {
      currentIndex.value =
        (currentIndex.value + 1) % list.value.length;
    }
</script>
