// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    build: {
        transpile: ['vue-preview-imgs'],
    },

    modules: [
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/cloudinary',
        '@nuxt/image',
    ],

    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },

    googleFonts: {
        families: {
            Forum: true,
            Poppins: [300],
        },
    },
})
