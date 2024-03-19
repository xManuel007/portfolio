/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cursive': ['Oleo Script']
    },
    extend: {
      colors: {
        navy: '#152836',
        backtext: '#164863',
        fronttext: '#9BBEC8'
      },
      backgroundImage: {
        'waves-background': "url('/src/assets/design/waves.jpg')",
      },
      boxShadow: {
        custom: '6px 6px 12px #0c1820, -6px -6px 12px #1e384c',
        customHover: '8px 8px 24px #0c1820, -8px -8px 24px #1e384c'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    'prettier-plugin-tailwindcss'
  ],
  tailwindAttributes: ['myClassList'],
}
