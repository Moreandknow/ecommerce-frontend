// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  compatibilityDate: "2025-04-25",
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      clientIdGoogleSignIn: "",
    },
  },
  routeRules: {
    "/server/**": { proxy: `${import.meta.env.NUXT_BASE_URL}/**` },
    "/registration/**": { ssr: false },
    "/cart": { ssr: false },
    "/checkout/**": { ssr: false },
  },
  image: {
    domains: [import.meta.env.NUXT_BASE_URL?.replace("https://", "")],
  },
});
