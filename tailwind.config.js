/** @type {import('tailwindcss').Config} */

import tailwindcssForms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

// const tailwindcssForms = require('@tailwindcss/forms')

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [tailwindcssForms, aspectRatio]
}
