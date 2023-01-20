/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/images/header-x1.png')"
      }
    },
  },
  plugins: [],
};
