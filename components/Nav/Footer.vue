<template>
    <footer class="font-thin py-4 border-t shadow-xl text-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-500">
        <div class="container mx-auto text-center">
            <p>&copy; {{ new Date().getFullYear() }} {{ en.copyright }}</p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    import en from '~/assets/en.json';
</script>
