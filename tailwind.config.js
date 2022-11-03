/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        gray: {
          500: "#323238",
          700: "#202024",
          900: "#121214",
        },
        yellow: {
          500: "#F7DD43",
        },
      },
      /* backgroundImage: {
        hero: "url(./src/assets/hero-bg.png)",
      }, */
    },
  },
  plugins: [],
};
