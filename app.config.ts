export default defineAppConfig({
  ui: {
    primary: "orange",
    gray: "muted",
    button: {
      rounded: "rounded-sm",
      padding: {
        sm: "py-3 px-5",
      },
      variant: {
        soft: "bg-{color}-100 border border-{color} hover:bg-{color}-50",
      },
      color: {
        white: {
          solid: "shadow-none ring-gray-200",
        },
      },
    },
  },
  card: {
    rounded: "rounded-none",
    ring: "ring-0",
  },
  verticalNavigation: {
    font: "font-normal",
  },
  accordion: {
    item: {
      padding: "p-0",
      color: "text-slate-800",
    },
  },
});
