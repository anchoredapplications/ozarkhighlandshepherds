import colors from 'tailwindcss/colors'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/global.css',
  ],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',    
    '@nuxt/image'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: { 'svg-stroke': 'var(--svg-stroke-color)' }
        }
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  }
})