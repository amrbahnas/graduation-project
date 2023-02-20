/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        btn: "#1d4ed8",
        disabled: "#e5e7eb",
        disabledTxt: "#757575",
        darkNav: "#192734",
        darkBody: "#15202B",
        darkCard: "#192734",
        darkPText: "#ffffff",
        darkSText: "#8899A6",
        darkMenu: "#9b9b9b",
        darkHover:"#22303c"
      },
    },
  },
  plugins: [],
};
