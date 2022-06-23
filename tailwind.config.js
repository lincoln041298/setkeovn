/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeprimary: "#EB5757"
      }
    },
    fontFamily: {
      'svngilroy': ['"SVN Gilroy"', 'sans-serif'],
    }
  },
  plugins: [],
}
