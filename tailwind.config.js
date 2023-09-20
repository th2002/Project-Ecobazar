/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'content': {
          100: '#E6E6E6',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333',
        },
        'success': '#00B207',
      },
      fontFamily: {
        Poppins: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

