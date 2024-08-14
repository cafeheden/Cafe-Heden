/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EB5E28",
        secondaryColor: "#272727",
        tertiaryColor: "#FFFCF2",
        lightGrey: "#CCC5B9",
        darkGrey: "#403D39",
        redHighlight: "#FF4A5C",
        yellowHighlight: "#FFD166",
        greenHighlight: "#06D67F",
      },

      fontFamily: {
        lora: ["Lora", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}