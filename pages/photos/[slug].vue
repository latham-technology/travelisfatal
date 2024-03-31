<template>
    <div>
        <TheImages :slug="slug" />
    </div>
</template>

<script setup>
const slug = useRoute().params.slug
</script>

<style lang="scss" scoped></style>
