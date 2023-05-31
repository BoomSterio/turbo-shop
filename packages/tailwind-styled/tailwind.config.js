const lightSky = '#81c4ff'
const yaleBlue='#16588E'
const crimson='#E7222E'

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme   : {
    extend: {
      colors: {
        primary  : lightSky,
        secondary: yaleBlue,
        accent   : crimson,
        woodsmoke: {
          50 : '#f2f6fa',
          100: '#e8eff6',
          200: '#d8d7e0',
          300: '#b5b3c6',
          400: '#8d8aa6',
          500: '#6f6c8b',
          600: '#5a5673',
          700: '#454257',
          800: '#31353e',
          900: '#2c2f35',
          950: '#17191e',
        },
        red: {
          100: '#ffe3e4',
          200: '#ffcacf',
          300: '#ff9fa9',
          400: '#ff6a7b',
          500: '#fd3651',
          600: crimson,
          700: '#c70931',
          800: '#a60b31',
          900: '#8e0d31',
        },
        blue: {
          200: '#c2def5',
          300: lightSky,
          400: '#4fa6e1',
          500: '#288bcf',
          600: '#1a6eaf',
          700: yaleBlue,
          800: '#164b76',
          900: '#184062',
          950: '#102841',
        }
      }
    },
  },
  plugins: [],
};