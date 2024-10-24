/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
      backgroundImage: {
        greenhill: "url('/src/assets/greenhill.jpg')",
      },
    },
  },
  plugins: [],
};
