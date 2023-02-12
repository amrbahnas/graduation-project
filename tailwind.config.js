/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#1d4ed8",
        disabled: "#e5e7eb",
        disabledTxt: "#757575",
      },
    },
  },
  plugins: [],
};
