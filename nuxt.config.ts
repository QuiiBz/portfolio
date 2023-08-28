// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/style.scss"],
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    subsets: ["latin"],
    download: true,
    families: {
      "Gilda Display": { wght: [400] },
    },
  },
  experimental: {
    componentIslands: true,
    payloadExtraction: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
