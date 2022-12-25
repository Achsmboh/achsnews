/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#1E1E1E",
        brownmuda: "#F4E6D9",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
