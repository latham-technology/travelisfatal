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
    ],

    cloudinary: {
        cloudName: 'mattlatham',
    },

    googleFonts: {
        families: {
            Forum: true,
            Poppins: [300]
        },
    },
})
