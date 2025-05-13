<template>
    <Page :image="currentItem?.images?.[0]">
      <PageTitle :content="name" />
      <div class="flex flex-col gap-6">
        <PageText :content="description"/>
        <div class="flex justify-between items-center flex self-center w-full md:mt-8 2xl:w-1/2">
          <IconButton :onClick="previous" ariaLabel="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </IconButton>
          <ul v-if="isPuppy(currentItem) && currentItem.price" class="px-4 flex flex-col items-center w-full xl:text-xl">
            <p class="text-xl xl:text-2xl h-10">{{ currentItem?.name }}</p>
            <li class="flex justify-between h-10 w-full max-w-64"><b>{{ en.litter.nickname }}:</b><span>{{ currentItem.nickname }}</span></li>
            <li class="flex justify-between h-10 w-full max-w-64"><b>{{ en.litter.sex }}:</b> {{ currentItem.sex }}</li>
            <li v-if="!currentItem.isSold" class="flex justify-between h-10  w-full max-w-64"><b>{{ en.litter.price }}:</b> ${{ currentItem.price }}</li>
            <li v-else class="flex justify-between h-10  w-full max-w-64"><b>{{ en.litter.price }}:</b><b class="color-red-500 uppercase">{{ en.litter.sold }}</b></li>
          </ul>
          <div v-else>
            <p class="text-xl xl:text-2xl h-40 flex items-center">{{ currentItem?.name }}</p>
          </div>
          <IconButton :onClick="next" ariaLabel="Next">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </IconButton>
        </div>

      </div>
    </Page>
</template>
    
<script lang="ts" setup>
    import { type Litter } from "~/types/litter"
    import { type Breed } from "~/types/breed"
    import { isPuppy, type Puppy } from "~/types/puppy";
    import en from '~/assets/en.json';

    const props = defineProps<{
      litter?: Litter;
      breed?: Breed;
    }>();
    const name = ref('');
    const description = ref<string[]>([]);
    const currentIndex = ref<number>(0);
    const list = ref<any[]>([]);
    
    if (!!props.breed) {
      name.value = props.breed.name
      description.value = props.breed.description
      list.value = [{name: props.breed.litters[0].name, images: [props.breed.images[0]]}, ...props.breed.litters.slice(1, props.breed.litters.length)]
    } else if (!!props.litter) {
      name.value = props.litter.name
      description.value = props.litter.description
      list.value = [{name: props.litter.puppies[0].name, images: [props.litter.images[0]]}, ...props.litter.puppies.slice(1, props.litter.puppies.length)]
    }

    const currentItem = computed<Puppy | Breed>(() => list.value[currentIndex.value]);

    function previous() {
      currentIndex.value =
        (currentIndex.value - 1 + list.value.length) % list.value.length;
    }
    
    function next() {
      currentIndex.value =
        (currentIndex.value + 1) % list.value.length;
    }
</script>
