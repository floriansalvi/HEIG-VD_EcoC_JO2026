// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/variables.css'],
  modules: [
    "@nuxt/image",
    "@nuxt/icon"
  ],
})
