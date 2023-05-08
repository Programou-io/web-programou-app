/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',

      'gray-100': '#E1E1E6',
      'gray-200': '#A9A9B2',
      'gray-400': '#7C7C8A',
      'gray-500': '#505059',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'turquoise-100': '#97F4E5',
      'turquoise-200': '#74E8D4',
      'turquoise-500': '#2ED1B5',
      'turquoise-700': '#158774',
      'turquoise-800': '#0C5E50',

      'pouple-100': '#9D4EDD',
      'pouple-200': '#7B2CBF',
      'pouple-500': '#5A189A',
      'pouple-700': '#3C096C',
      'pouple-800': '#240046',

      'red-100': '#AD2831',
      'red-200': '#800E13',
      'red-500': '#640D14',
      'red-700': '#38040E',
      'red-800': '#250902',

      'blue-100': '#00A6FB',
      'blue-200': '#0582CA',
      'blue-500': '#006494',
      'blue-700': '#003554',
      'blue-800': '#051923',
    },

    fontFamily: {
      sans: 'Roboto',
      mono: 'Fira Code',
    },
  },
  plugins: [],
}
