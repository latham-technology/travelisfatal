<template>
    <Gallery
        :list="galleryList"
        :config="{
            immediate: false,
        }"
    >
        <template #item="{ data }">
            <Item v-bind="data" />
        </template>
    </Gallery>
</template>

<script setup>
import { Gallery, Item } from 'vue-preview-imgs'

const props = defineProps({
    slug: {
        type: String,
        required: true,
    },
})

const config = useRuntimeConfig()

const getResources = async () => {
    const { data } = await useFetch(
        `https://res.cloudinary.com/${config.public.cloudinary.cloudName}/image/list/fran-${props.slug}.json`,
    )

    if (!data) sendRedirect('/')

    const transformResource = (resource) => ({
        href: `https://res.cloudinary.com/${config.public.cloudinary.cloudName}/image/upload/w_auto/v1/${resource.public_id}`,
        thumbnail: `https://res.cloudinary.com/${config.public.cloudinary.cloudName}/image/upload/c_thumb,g_auto,w_400/v1/${resource.public_id}`,
        alt: '',
        width: resource.width,
        height: resource.height,
    })

    return data.value.resources.map(transformResource)
}

const galleryList = await getResources()
</script>

<style lang="scss" scoped>
.vpis-gallery {
    @apply grid grid-flow-dense gap-1;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.vpis-item {
    :deep {
        > img {
            @apply object-cover min-h-full;
        }
    }
}
</style>
