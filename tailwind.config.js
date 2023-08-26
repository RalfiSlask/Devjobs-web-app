/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "purple-rgba": "rgba(89, 100, 224, 0.1)",
        "white-rgba": "rgba(255, 255, 255, 0.1)"
      }
    },
  },
  plugins: [],
}
