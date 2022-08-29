/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1s easy-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "6xl": "4.5rem",
      "8xl": "6rem",
      "10xl": "10rem",
      "12xl": "12rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
