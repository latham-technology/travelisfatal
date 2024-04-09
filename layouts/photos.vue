<template>
    <div class="min-h-full bg-gray-200 px-4 pb-4">
        <TheNav />
        
        <slot />

        <GoToTop />
    </div>
</template>

<script setup>
useSeo()
</script>

<style lang="scss">
</style>
