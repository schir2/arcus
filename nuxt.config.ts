import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module'
    ],
    primevue: {
        components: {
            prefix: 'p',
            include: ['InputText', 'Form', 'Password', 'Button', 'Toast', 'Message', 'MenuBar', 'Avatar', 'Badge', 'Menu']
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
    supabase: {
        redirectOptions: {
            login: '/login',
            exclude: ['/'],
            callback: '/dashboard'
        }
    },
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true}
})