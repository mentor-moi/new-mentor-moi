/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      darkOrange: '#FF8800',
      lightOrange: '#FFB38A',
    },
  },
  plugins: [],
}
