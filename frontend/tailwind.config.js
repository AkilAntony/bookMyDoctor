/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "success":'#00bf63',
        'cardBackground':'rgba(201, 216, 255, 1)'
      }
    },
  },
  plugins: [],
}

