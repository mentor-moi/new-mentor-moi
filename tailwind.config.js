/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: '#FF8800',
        darkPurple: '#9E77ED',
        lightOrange: '#FFB38A',
        lightPurple: '#D6BBFB',
      },
      fontFamily: {
        Lato: ['Lato'],
        Playfair: ['Playfair Display'],
      },
    },
  },
  plugins: [],
}
