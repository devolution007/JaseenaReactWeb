/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
      },
    },
  },
  plugins: [],
};
