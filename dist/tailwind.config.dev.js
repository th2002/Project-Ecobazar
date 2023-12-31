"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'content': {
          100: '#E6E6E6',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333',
          900: '#1A1A1A'
        },
        'success': '#00B207',
        'success-dark': '#2C742F',
        'admin-content': {
          400: '#67748E',
          500: '#344767'
        }
      },
      fontFamily: {
        Poppins: ['poppins', 'sans-serif'],
        Pacifico: ['Pacifico', 'sans-serif'],
        OpenSans: ['Open Sans', 'Karla']
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        product: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        formLogin: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        formRegister: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        product: 'product 2s ease-in-out',
        formLogin: 'formLogin 1s ease-in-out',
        formRegister: 'formRegister 1s ease-in-out'
      },
      backgroundImage: {
        'banner': 'url("./images/banners/Banner.png")'
      }
    }
  },
  plugins: []
};