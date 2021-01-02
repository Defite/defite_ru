module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "logo-pink-dot": "#FF4C60",
      },
      fontFamily: {
        heading: ["Source Sans Pro", "sans-serif"],
        body: [
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.700"),
              fontFamily: theme("fontFamily.heading").join(", "),
            },

            h2: {
              color: theme("colors.gray.700"),
              fontFamily: theme("fontFamily.heading").join(", "),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
}
