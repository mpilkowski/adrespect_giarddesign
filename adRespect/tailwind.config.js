/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { black: "#111111", white: "#FFFFFF" },
      backgroundImage: {
        heroImg: 'url("./src/assets/heroImg.png")',
      },

      backgroundColor: {
        customBeige: "#DCC1AB",
        customGrey: "#F5F0EC",
        customGreen: "#1B5B31",
      },
      colors: {
        customGreen: "#1B5B31",
        customBeige: "#DCC1AB",
        customGrey: "#F5F0EC",
      },
      content: {
        dropdownIco: 'url("./src/assets/Icon.svg")',
        arrowRight: 'url("./src/assets/arrowRight.svg")',
        arrowDown: 'url("./src/assets/arrowDown.svg")',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};