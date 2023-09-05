/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  purge: {
      enabled: false, //true for production build
      content: [
          '../**/templates/*.html',
          '../**/templates/**/*.html'
      ]
  },
  theme: {
      extend: {
        // fontFamily:{
        //     sans: [ 'Montserrat', 'IBM Plex Sans Thai', 'sans-serif']
        // }
      },
  },
  variants: {},
  plugins: [],
}
