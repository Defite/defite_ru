module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    flex: {
      '33': '1 0 33.333%',
      '66': '1 0 66.666%',
      '100': '1 0 100%'
    },
    // screens: {
    //   'sm': {'min': '320px', 'max': '767px'},
    //   'md': {'min': '768px', 'max': '1023px'},
    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   '2xl': {'min': '1536px'},
    // },
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
        dark: {
          css: {
            color: theme("colors.white"),

            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
              fontFamily: theme("fontFamily.heading").join(", "),
            },

            a: {
              color: theme("colors['logo-pink-dot']"),
            },

            "strong, blockquote": {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      flexGrow: ["last"]
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
