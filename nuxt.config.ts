// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    title: 'Extinction Level Event Knowledge Kit',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000',
        }
    },
    typescript: {
        strict: true,
    },
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE,
            apiClientId: process.env.API_CLIENT_ID,
            apiClientSecret: process.env.API_CLIENT_SECRET,
        }
    }
})
