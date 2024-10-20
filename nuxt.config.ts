// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  serverMiddleware: [
    { path: '/', handler: '~/middleware/frame.ts' }
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  },
})