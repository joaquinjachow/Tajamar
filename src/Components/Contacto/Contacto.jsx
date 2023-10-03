import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Contacto () {
  return (
    <>
      <div className='relative bg-center bg-cover bg-ContactoFondo'>
        <div className='relative bg-black bg-opacity-30'>
          <Navbar />
          <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-96'>Contacto</h1>
        </div>
      </div>
      <main className='mx-2 lg:ml-[10%] 2xl:ml-[20%] md:grid md:max-w-5xl md:grid-cols-2 md:ml-2 md:mt-4 text-black'>
        <div className='col-span-2 xl:mb-10'>
          <form action='https://getform.io/f/e13bf14d-eb9f-4ae8-8b65-af75c870b4ce' method='POST' className='grid grid-cols-2 grid-rows-4 gap-2 p-2 text-lg md:gap-4 md:p-5'>
            <input type='text' placeholder='Nombre' name='name' className='col-span-1 row-span-1 pl-3 bg-[#E1D5BE] rounded-sm' />
            <textarea placeholder='Mensaje' name='message' className='col-span-1 row-span-3 pl-4 pt-2 bg-[#E1D5BE] rounded-sm' />
            <input type='email' placeholder='Correo Electronico' name='email' className='col-span-1 row-span-1 pl-3 bg-[#E1D5BE] rounded-sm' />
            <input type='text' placeholder='Empresa' name='enterprise' className='col-span-1 row-span-1 pl-3 bg-[#E1D5BE] rounded-sm' />
            <button type='submit' className='btn bg-[#766A5D] col-span-2 hover:bg-[#E1D5BE] text-white'>Enviar</button>
          </form>
        </div>
        <div className='flex flex-col p-2 pb-4 text-xl md:text-2xl 2xl:ml-8'>
          <h1 className='text-4xl text-[#746757]'>Llamanos</h1>
          <h2>351-703-7353</h2>
          <h2>tajamarmolduras@gmail.com</h2>
          <h2>Piero Astori 1300</h2>
        </div>
        <div className='w-full col-span-3 border-t border-[#E1D5BE]' />
        <div className='md:mt-10 relative m-3 w-72 h-52 sm:w-[600px] lg:w-[800px] xl:w-[1050px] lg:h-72 mb-6'>
          <iframe
            className='absolute inset-0 w-full h-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.8152168865006!2d-64.12329752289239!3d-31.396752246411985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943297de0983efbf%3A0x782970c790396c1f!2sAlpha%20Transportes%20S.A.!5e0!3m2!1ses-419!2sar!4v1679343722028!5m2!1ses-419!2sar'
            title='Maps' allowfullscreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
