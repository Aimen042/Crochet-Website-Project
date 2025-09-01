/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",   // scans root HTML/JS files
    "./products/**/*.html", // all HTML inside nested product folders
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', '"Fredoka One"', '"Baloo 2"', 'cursive', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}


