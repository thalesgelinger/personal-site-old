/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/**/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: '#E6E6E8',
        lightGray: 'rgba(0, 0, 0, 0.25)',
        textBackground: 'rgba(168, 170, 176, 0.22)',
      },
      borderColor: {
        gray: 'rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};
