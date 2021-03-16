module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      md: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        darkColor: "var(--dark-color)",
        lightColor: "var(--light-color)",
        accentPink: "var(--acc-pink-color)",
        accentPurple: "var(--acc-purple-color)",
      },
      fontFamily: {
        body: "var(--font-body)",
      },
    },
  },
  variants: {},
  plugins: [],
}
