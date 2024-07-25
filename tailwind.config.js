/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',
        lightgray: '#f2f2f2',
        teal: '#008080',
        gold: '#FFD700',
        lightblue: '#87CEEB',
      },
    },
  },
  plugins: [],
}


