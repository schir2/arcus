import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module'
    ],
    primevue: {
        components: {
            prefix: 'prime',
        },
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    },
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true}
})