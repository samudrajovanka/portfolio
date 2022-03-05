const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1B1B27',
      dark: '#02020c',
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
    },
    extend: {
      colors: {
        c: {
          blue: '#234CAD',
          yellow: '#FFBF00',
          'light-gray': '#EEEEEE',
          'soft-black': '#07071f',
        },
      },
    },
  },
  plugins: [],
};
