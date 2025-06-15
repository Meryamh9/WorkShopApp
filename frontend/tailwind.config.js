const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
extend: {
  keyframes: {
    scroll: {
      '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(-50%)' } // car on duplique les cartes
    }
  },
  animation: {
    scroll: 'scroll 20s linear infinite'
  }
}

  }}