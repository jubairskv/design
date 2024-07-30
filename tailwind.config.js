module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark-blue': '#1B2535',
        'custom-light-blue': '#4690FF',
        'custom-orange':'#FF6B00',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}