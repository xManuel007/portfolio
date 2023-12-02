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
        'leaves-background': "url('/src/assets/design/leaves.jpg')",
        'blackhole-background': "url('/src/assets/design/blackhole.jpg')",
        'cosmos-background': "url('/src/assets/design/cosmos.jpg')",
        'waves-background': "url('/src/assets/design/waves.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    'prettier-plugin-tailwindcss'
  ],
  tailwindAttributes: ['myClassList'],
}
