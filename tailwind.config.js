/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        52: "repeat(52, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
