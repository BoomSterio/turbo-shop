const colors = require("tailwindcss/colors");

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
        primary  : colors.blue[300],
        secondary: colors.blue[700],
        accent   : colors.red[600],
        woodsmoke: {
          50 : '#f2f6fa',
          100: '#e8eff6',
          200: '#c0c7cf',
          300: '#99a2af',
          400: '#737e8e',
          500: '#596373',
          600: '#464e5b',
          700: '#3a404b',
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
          600: '#e7222e',
          700: '#c70931',
          800: '#a60b31',
          900: '#8e0d31',
        },
        blue: {
          200: '#c2def5',
          300: '#81c4ff',
          400: '#4fa6e1',
          500: '#288bcf',
          600: '#1a6eaf',
          700: '#16588e',
          800: '#164b76',
        }
      }
    },
  },
  plugins: [],
};