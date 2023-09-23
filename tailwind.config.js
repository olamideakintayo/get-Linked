/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Clash display", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      unica: ["Unica One", "cursive"],
    },

    extend: {
      colors: {
        default: "#150E28",
        common: "#D434FE",
        white: "#FFFFFF",
        page: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
