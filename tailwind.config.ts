import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
    },
    extend: {
      colors: {
        orange: {
          "50": "#FDEFEC",
          "100": "#FCDBD5",
          "200": "#F8B7AA",
          "300": "#F59380",
          "400": "#F16F55",
          "500": "#EE4D2D",
          "600": "#D03111",
          "700": "#9C240D",
          "800": "#681808",
          "900": "#340C04",
          "950": "#1C0702",
        },
        muted: {
          "50": "#F2F2F2",
          "100": "#E6E6E6",
          "200": "#C9C9C9",
          "300": "#B0B0B0",
          "400": "#969696",
          "500": "#7C7C7C",
          "600": "#636363",
          "700": "#4A4A4A",
          "800": "#303030",
          "900": "#1A1A1A",
          "950": "#0D0D0D",
        },
      },
    },
  },
};
