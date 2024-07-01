/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Now', 'sans-serif']
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}