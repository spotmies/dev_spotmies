/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   iPhone: "380px",
    // },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
