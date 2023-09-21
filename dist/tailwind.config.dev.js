"use strict";

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
          900: '#1A1A1A'
        },
        'success': '#00B207',
        'success-dark': '#2C742F'
      },
      fontFamily: {
        Poppins: ['poppins', 'sans-serif']
      },
      backgroundImage: {
        'banner': 'url("./images/banners/Banner.png")'
      }
    }
  },
  plugins: []
};