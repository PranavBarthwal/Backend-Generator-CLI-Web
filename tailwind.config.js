/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replace 'sans' with Poppins
      },
      boxShadow: {
        'indigo-bottom': '0 4px 6px rgba(99, 102, 241, 0.7)', // Custom indigo shadow
      },
    },
  },
}