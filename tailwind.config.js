/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '66': '262px',
        '18': '72px'
      },
      gap: {
        '25': '97.5px',
        '26': '105px'
      }
    },
  },
  plugins: [],
}