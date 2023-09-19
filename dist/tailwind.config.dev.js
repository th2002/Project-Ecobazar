"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};