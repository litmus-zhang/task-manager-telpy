/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        1 : '#3179ba',
        2 : '#ebecf0'
      }
    },
  },
  plugins: [],
}