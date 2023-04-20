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
        2 : '#ebecf0',
        3: '#ffffff3d',
        4: "#ffffff52",
        5: "#5aac44"
      }
    },
  },
  plugins: [],
}