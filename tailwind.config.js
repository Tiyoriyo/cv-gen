/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').defaultTheme} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Zen Kaku Gothic New'],
        swiggly: ['Swanky and Moo Moo', 'cursive'],
      },
    },
  },
  plugins: [],
};
