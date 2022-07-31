/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif',
      },
      colors: {
        purple: {
          200: '#8284FA',
          500: '#5E60CE',
        },
        blue: {
          300: '#4EA8DE',
          400: '#1E6F9F',
        },
        red: {
          500: '#E25858',
        },
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
          900: '#191919'
        }
      },
      boxShadow: {
        'outline': '0 0 0 2px',
      }
    },
  },
  plugins: [],
}
