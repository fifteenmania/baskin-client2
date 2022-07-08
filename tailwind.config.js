const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {}, 
    backgroundColor: {
      primary: colors.blue,
      secondary: colors.slate,
      ...colors
    },
    textColor: {
      primary: colors.slate,
      gray: colors.gray,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [],
}
