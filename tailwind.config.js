/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class', // or media (automatically switch theme based on user preference theme)
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        main: {
          1: colors.zinc[50],
          1.5: colors.zinc[200],
          2: colors.zinc[400],
          3: colors.zinc[700],
          4: colors.zinc[800],
          5: colors.zinc[900]
        },
        primary: {
          0.5: colors.indigo[100],
          1: colors.indigo[300],
          2: colors.indigo[400],
          3: colors.indigo[500],
          4: colors.indigo[600],
          5: colors.indigo[700]
        },
        secondary: {
          1: colors.purple[300],
          2: colors.purple[400],
          3: colors.purple[500]
        }
      }
    },
    keyframes: {
      rainbowBorder: {
        '0%': { 'border-color': 'transparent transparent transparent transparent' },
        '25%': { 'border-color': 'transparent transparent transparent red' },
        '50%': { 'border-color': 'transparent transparent yellow red' },
        '75%': { 'border-color': 'transparent green yellow red' },
        '100%': { 'border-color': 'blue green yellow red' },
      },
    },
    animation: {
      'rainbow-border': 'rainbowBorder 0.6s ease-in-out forwards',
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
