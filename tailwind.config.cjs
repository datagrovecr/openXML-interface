/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green':{
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46'
      },
      'grey':'#18181B',
      'white':'#ffffff'

    },
    extend: {},
  },
  plugins: [],
}
