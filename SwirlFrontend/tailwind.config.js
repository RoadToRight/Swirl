/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: "#E5E5E5",
        lightpink: "rgba(243, 167, 255, 0.6)",
        darkpink: "#C707E4",
        lightpurple: "#F4EFFF",
      },
    },
  },
  plugins: [],
};
