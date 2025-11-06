// FILE: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#050507",
          800: "#0b0b0f",
          700: "#121217",
        },
        accent: {
          400: "#a78bfa", // violet-ish accent
          300: "#c4b5fd",
        },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, rgba(8,6,23,0.6), rgba(2,2,12,0.9))",
      },
      boxShadow: {
        "glass": "0 6px 30px rgba(10,10,15,0.6)",
      },
    },
  },
  plugins: [],
};
