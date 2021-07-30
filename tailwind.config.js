module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {},
    screens: {
      xs: "450px",
      sm: "570px",
      "md-max": { max: "768px" },
      md: "768px",
      "lg-max": { max: "1024px" },
      lg: "1024px",
      l: "1199px",
      xl: "1440px",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      nav: "350px",
      full: "100%",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    colors: {
      white: "#fff",
      black: "#151512",
      grey: {
        test: "#242424",
      },
    },
  },
  variants: {},
  plugins: [],
};
