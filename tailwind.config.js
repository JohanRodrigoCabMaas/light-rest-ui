/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'principal':    '#FFBB82',
        'accent':    '#FF7484',
        'warn':    '#FFD462',
        'success':    '#71E687',
        'info':    '#00AFEA',
        'gray-primary':    '#8C8993',
        'gray-secondary':    '#F6F1F5',
        'gray-light':    '#F9F9F9',
      }
    },
  },
  plugins: [],
}

