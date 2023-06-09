// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "LISTRA - coming soon...",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
