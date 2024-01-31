/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'sidebar-bg':'#FAFAFB',
        'logocolor':'#605BFF',
        'tablebg':'#F5F5F5',
      }
    },
  },
  plugins: [],
}

