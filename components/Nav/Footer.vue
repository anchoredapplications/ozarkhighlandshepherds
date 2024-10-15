<template>
    <footer class="font-thin py-4 border-t shadow-xl text-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-500">
        <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Ozark Highland Shepherds. All rights reserved.</p>
        <!-- <nav class="flex justify-center gap-4 pb-4">
            <a v-for="route of routes" :href="route.path" class="hover:underline">{{ route.label }}</a>
        </nav> -->
        </div>
    </footer>
</template>

<script lang="ts" setup>
    import { getRoutes } from '~/globals/routes';
    const routes = getRoutes()
</script>
