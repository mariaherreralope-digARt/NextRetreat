/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
        spiritual: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        primary: '#869c84',
        'primary-dark': '#5a6d57',
        secondary: '#f8e1bf',
        'secondary-dark': '#cbb48f',
        accent: '#d99b42',
        'accent-dark': '#a97a2c',
        btt: '#b95755',
        'btt-dark': '#8a3c3a',
        dark: '#907169',
        'dark-dark': '#6d5047',
      },
    },
  },
  plugins: [],
};
