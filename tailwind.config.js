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
        navy2: '#152836',
        navy: '#010409',
        backtext: '#164863',
        fronttext: '#9BBEC8',
        borderColor: '#30363d'
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
