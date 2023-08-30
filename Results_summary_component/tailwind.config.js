/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#FF5757",
        cobalt_blue: "#1125D4",
      },
    },
  },
  plugins: [],
};
