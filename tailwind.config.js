/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-black', 
    'text-white'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}