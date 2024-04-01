<template>
    <div>
        <TheImages :slug="slug" />
    </div>
</template>

<script setup>
const slug = useRoute().params.slug

definePageMeta({
    layout: 'photos'
})
</script>

<style lang="scss" scoped></style>
