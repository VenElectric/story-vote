module.exports = {

  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',

  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
   },
   variants: {
    extend: {
      ringWidth:['hover'],
      transitionProperty: ['hover', 'focus'],

     }
   },
   plugins: [
    require('@tailwindcss/typography'),
   ]
 }
