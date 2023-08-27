/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "purple-rgba": "rgba(89, 100, 224, 0.1)",
        "white-rgba": "rgba(255, 255, 255, 0.1)",
        "white-rgba-hover": "rgba(255, 255, 255, 0.25)",
        "purple-rgba-hover": "rgba(89, 100, 224, 0.3512)",
        "fulltime-light": "rgba(25, 32, 45, 0.1035)",
        "fulltime-dark": "rgba(255, 255, 255, 0.1035)"

      }
    },
  },
  plugins: [],
}
