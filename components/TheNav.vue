<template>
    <div class="flex items-baseline gap-2 py-4 md:py-8">
        <NuxtLink to="/" class="text-2xl mr-2">🌐</NuxtLink>

        <div class="flex items-center flex-wrap gap-4">
            <NuxtLink class="underline" to="/photos/china">China</NuxtLink>
            <NuxtLink class="underline" to="/photos/jordan-syria">Jordan & Syria</NuxtLink>
            <NuxtLink class="underline" to="/photos/costarica">Costa Rica</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.router-link-active {
    @apply font-bold;
}
</style>