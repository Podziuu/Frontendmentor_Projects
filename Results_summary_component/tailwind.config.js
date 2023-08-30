/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#FF5757",
        cobalt_blue: "#1125D4",
      },
      dropShadow: {
        red: "0 35px 35px hsl(0, 100%, 67%)",
        yellow: "0 35px 35px hsl(39, 100%, 56%)",
        green: "0 35px 35px hsl(166, 100%, 37%)",
        blue: "0 35px 35px hsl(234, 85%, 45%)",
      },
    },
  },
  plugins: [],
};
