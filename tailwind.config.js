/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
    "js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6155e"
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.nav-link': {
          transition: 'text-shadow 0.2s ease-in-out',
          textDecoration: 'none',
          textShadow: '0 0 5px rgba(0,0,0, 1)',
          color: 'white',
        },
        '.nav-link:hover': {
          textShadow: '0 0 20px rgba(255, 255, 255, 1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}