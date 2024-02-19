/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "retro": {
          50: "#7F27FF",
          100: "#9F70FD",
          150: "#FDBF60",
          200: "#FF8911"
        },
        "background": {
          50: "#0f172a"
        }
      },
    },
  },
  plugins: [],
}