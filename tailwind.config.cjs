/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          light: "#141918",
          DEFAULT: "#121414",
        },
        primary: {
          DEFAULT: "#419C87",
          dark: "#2B5C50",
        },
        secondary: "#60F6D3",
        blue: "#39A0ED",
        red: "#D64933",
      },
    },
  },
  plugins: [],
};
