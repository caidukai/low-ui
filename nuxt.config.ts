// https://nuxt.com/docs/api/configuration/nuxt-config
// /** @type {import('nuxt').} */
export default defineNuxtConfig({
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  tailwindcss: {
    // cssPath: '~/styles/globals.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  components: {
    global: true,
    dirs: ['~/components'] 
  },
});
