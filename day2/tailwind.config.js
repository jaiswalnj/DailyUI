/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        '2xl': '0 35px 40px -15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
