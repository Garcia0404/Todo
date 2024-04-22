/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-ts': '#3178C6',
        'white-bg': '#FDFBF6',
        'gray-f': '#242422',
      },
      screens: {
        'tablet': '700px',
      }
    },
  },
  plugins: [],
}