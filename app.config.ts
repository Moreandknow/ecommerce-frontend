export default defineAppConfig({
  head: {
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },
  ui: {
    primary: "orange",
    gray: "muted",
    button: {
      rounded: "rounded-sm",
      padding: {
        sm: "py-3 px-5",
      },
    },
  },
});
