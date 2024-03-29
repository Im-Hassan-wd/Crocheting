module.exports = {
  content: [
    "./public/**/*.{html,js,ejs}", 
    './client/**/*.{html,js,ejs}',
    './views/**/*.{html,js,ejs}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2df',
          200: '#888883'
        }
      },
      fontFamily: {
        nunito: ['Nunito Sans'],
        anek: ['Anek Tamil', 'san serif']
      }
    },
  },
  plugins: [],
}