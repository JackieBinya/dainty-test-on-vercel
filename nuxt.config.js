const dynamicRoutes = async () => {
  const pricingSlugRoutes = ["core", "plus", "enterprise"]

  return new Promise((resolve) => {
    resolve(pricingSlugRoutes.map((slug) => `pricing/${slug}`))
  })
}

const development = process.env.NODE_ENV !== "production"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dainty",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/styles.scss",
    "~/assets/scss/themes.scss",
    "~/assets/scss/fonts.scss",
    "swiper/css/swiper.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-awesome-swiper.js", mode: "client" },
    { src: "~/plugins/tawk.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router Middleware
  router: {
    middleware: ["menu", "pricingOverlay"],
  },

  // Register Pricing slug routes in the nuxt generate command
  generate: {
    routes: dynamicRoutes,
  },

  env: {
    baseUrl: development ? "http://localhost:3000" : process.env.BASE_URL,
    stripePublishableKey: process.env.STRIPE_PK,
  },
}
