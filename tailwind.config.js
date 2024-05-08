const defaultTheme = require('tailwindcss/defaultTheme');

//set up theme colors
const colors = {
  font: {
    white: '#edeef0'
  },
  background: {
    dark: '#18191b',
    gray: '#797d83'
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: ['Roboto', ...defaultTheme.fontFamily.sans],
      colors: {...colors},
    },
  },
  plugins: [],
}

