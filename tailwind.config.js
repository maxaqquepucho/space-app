/** @type {import('tailwindcss').Config} */

import tailwindcssForms from '@tailwindcss/forms'

// const tailwindcssForms = require('@tailwindcss/forms')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [tailwindcssForms]
}
