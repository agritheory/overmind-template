export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "overmind-template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [],
  plugins: [{ src: "~/plugins/overmind.plugin.js" }],
  components: true,
  buildModules: [],
  modules: [],
  build: {},
  router: {
    middleware: "overmind.middleware"
  }
};
