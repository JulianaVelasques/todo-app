/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-background':
          'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        'light-theme-gray': 'hsl(0, 0%, 98%)',
        'very-light-theme-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-theme-grayish-blue': 'hsl(233, 11%, 84%)',
        'light-theme-dark-grayish-glue': ' hsl(235, 19%, 35%)',
        'dark-theme-blue': 'hsl(235, 21%, 11%)',
        'dark-theme-desaturated-blue': ' hsl(235, 24%, 19%)',
        'dark-theme-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'dark-theme-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-theme-grayish-blue': 'hsl(234, 11%, 52%)',
        'dark-theme-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
