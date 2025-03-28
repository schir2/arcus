// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        'shadcn-nuxt'
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    supabase: {

        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        serviceKey: process.env.SUPABASE_SERVICE_KEY,

    },
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true}
})