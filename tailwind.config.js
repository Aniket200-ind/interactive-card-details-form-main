/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'error-red': 'hsl(0, 100%, 66%)',
        'dark-violet': 'hsl(278, 68%, 11%)',
        'darkgrayish-violet': 'hsl(279, 6%, 55%)',
        'lightgrayish-violet': 'hsl(270, 3%, 87%)', 
      },
      fontFamily:{
        spaceg: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}