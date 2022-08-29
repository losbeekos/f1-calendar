import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@kevinmarrec/nuxt-pwa'],
  pwa: {
    manifest: {
      name: 'F1 Calendar',
      lang: 'en',
    },
    meta: {
      name: 'F1 Calendar',
      description:
        'F1 race weekend calendar with times in your local timezone.',
    },
    workbox: {
      // TODO: Caching for F1 API in service worker.
      // This doesn't work yet in the Nuxt 2 PWA module.
      // https://github.com/kevinmarrec/nuxt-pwa-module#%EF%B8%8F-missing-features-%EF%B8%8F
      // runtimeCaching: [
      //   {
      //     urlPattern: 'https://ergast.com/api/f1/*',
      //     handler: 'cacheFirst',
      //     method: 'GET',
      //   },
      // ],
    },
  },
});
