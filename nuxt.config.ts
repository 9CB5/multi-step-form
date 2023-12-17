// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'multi-step-form',
      htmlAttrs: {
        lang: 'en'
      },
    }
  },
  ssr: false,
  devtools: { enabled: true },
  css: ["@/scss/main.scss"],
  modules: [
    '@pinia/nuxt',
  ]
})
