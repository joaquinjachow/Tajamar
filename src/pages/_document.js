import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='keywords' content='madera, molduras, madera dura, madera de calidad, Madera en cordoba, Córdoba, Machimbre, Calidad' />
        <meta name='description' content='Visita la mejor página para encontrar todo tipo de madera, con la mejor calidad de Córdoba y de Argentina' />
        <meta name='author' content='Joaquin Jachow' />
        <meta name='theme-color' content='#000000' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap' rel='stylesheet' />

      </Head>
      <body className='font-serif bg-[#FCFCFC]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
