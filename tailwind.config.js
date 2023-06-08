/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FBF9F8",
        white: "#fff",
        black: "#000",
        red: "#C50020",
        green: "#004225",
        "green-light": "#1D783B",
        "text-color": "#4D4D4D",
        "gray-dark": "#686866",
        gray: "#E6E6E6",
        "gray-light": "#d3dce6",
        overlay: "#24262e",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
