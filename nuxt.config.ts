// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: [
    '~/assets/css/variables.css'
  ],
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxtjs/tailwindcss',

    ['@nuxt/icon', {
      mode: 'svg',
      serverBundle: {
        collections: ['lucide']
      }
    }],

    ['@nuxt/image', {
      provider: 'ipx',
      quality: 80,
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536
      },
      densities: [1, 2],
      presets: {
        card: {
          modifiers: {
            format: 'avif',
            quality: 80,
            width: 384
          }
        },
        hero: {
          modifiers: {
            format: 'avif',
            quality: 85,
            width: 1920
          }
        },
        logo: {
          modifiers: {
            format: 'avif',
            quality: 90,
            width: 200
          }
        }
      }
    }]
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})