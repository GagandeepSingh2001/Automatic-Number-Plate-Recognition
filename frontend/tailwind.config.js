/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   fade: {
      //     from: {opacity: 1},
      //     to: {opacity: 0},
      //   }
      // }
    },
  },
  plugins: [],
}