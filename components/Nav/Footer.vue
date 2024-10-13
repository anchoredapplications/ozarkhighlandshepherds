<template>
    <footer class="py-4 border-t shadow-xl">
        <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} [Kennel Name]. All rights reserved.</p>
        <!-- <nav class="flex justify-center gap-4 pb-4">
            <a v-for="route of routes" :href="route.path" class="hover:underline">{{ route.label }}</a>
        </nav> -->
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { routes } from '~/globals/routes';

// No props or state needed for this simple footer
</script>

<style scoped>
/* Custom styles if needed */
</style>