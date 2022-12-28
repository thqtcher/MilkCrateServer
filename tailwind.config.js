/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MCcream: '#fff8ef',
        MCblack: '#000000',
        MCorange: '#EE7545',
        MCred: '#C43A39',
        MCblue: '#52A5AF',
        MCwhite: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
