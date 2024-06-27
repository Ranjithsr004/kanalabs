/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'urbanist':['Urbanist','sans-serif' ],
        'manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

