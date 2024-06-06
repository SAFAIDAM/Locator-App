/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'tablet1': '600px', // custom breakpoint for 600px width screens
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ],
}