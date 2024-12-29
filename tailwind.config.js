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
    },
  },
  plugins: [],
} 