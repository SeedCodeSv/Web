// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-lazy-load", "@nuxt/image"],
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,
    defaultImage: true,
  },
  image: {
    dir: './assets',
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dkdrkfuff/image/upload/"
    }
  },
  
});
