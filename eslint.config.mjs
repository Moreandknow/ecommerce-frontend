// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "eslintvue/html-self-closing": [
        "warn",
        {
          html: {
            void: "any",
          },
        },
      ],
    },
  }
);
