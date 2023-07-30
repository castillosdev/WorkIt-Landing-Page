/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            'dark-purple': '#24053E',
            'eucalyptus': '#44FFA1',
            'davys-grey': '#584D62',
            'ghost-white': '#FCF8FF',
            'light-grey': '#E5E5E5',
            'white': '#FFFFFF'
        },
      extend: {
        fontFamily: {
            'fraunces': ['Fraunces'],
            'manrope': ['Manrope', 'sans-serif']
        },
    },
    },
    plugins: [],
  }
