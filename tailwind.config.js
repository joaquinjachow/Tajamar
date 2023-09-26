/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        MaderaFondo: 'url(/images/HomeFondo.jpg)',
        EmpresaFondo: 'url(/images/EmpresaFondo.jpg)',
        ProductosFondo: 'url(/images/ProductosFondo.jpg)',
        ContactoFondo: 'url(/images/ContactoFondo.webp)'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ]
}
