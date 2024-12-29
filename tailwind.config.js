/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sansan': {
          'red': '#d70c18',
          'blue': '#004e98',
          'gray': '#808080',
          'lightgray': '#e6e6e6',
          'offwhite': '#f7f7f7',
        }
      },
      fontFamily: {
        'sans': ['sofia-pro', 'Helvetica Neue', 'Yu Gothic', 'YuGothic', 'Hiragino Kaku Gothic Pro', 'Verdana', 'Meiryo', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.1)',
          },
          '70%': {
            opacity: '0.95',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  plugins: [],
} 