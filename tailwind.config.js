/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        MaderaFondo: 'url(/backgroundImages/HomeFondo.jpg)',
        EmpresaFondo: 'url(/backgroundImages/EmpresaFondo.jpg)',
        ProductosFondo: 'url(/backgroundImages/ProductosFondo.jpg)',
        ContactoFondo: 'url(/backgroundImages/ContactoFondo.webp)'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
}
