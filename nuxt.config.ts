// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@hebilicious/vue-query-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-link-checker",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@nuxtjs/google-fonts",
    "@sidebase/nuxt-auth",
    "nuxt-tiptap-editor",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      "Work Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  auth: {
    globalAppMiddleware: true,
  },
  tiptap: {
    prefix: "Tiptap",
  },
});
