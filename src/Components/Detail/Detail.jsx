import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Maderas from '../MaderaProductos/Maderas'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function Detail () {
  const router = useRouter()
  const { link } = router.query
  const madera = Maderas?.find((el) => el.link === link)
  if (!madera) {
    return (
      <>
        <Navbar />
        <h1 className='mt-10 text-3xl text-center'>Producto no encontrado</h1>
        <Footer />
      </>
    )
  }
  return (
    <>
      <div className='bg-fixed bg-center bg-cover bg-ProductosFondo'>
        <Navbar />
        <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-52'>{madera.name}</h1>
      </div>
      <div className='container mx-auto mt-4 md:mt-12 md:mb-12'>
        <div className='flex flex-col mx-2 md:flex-row'>
          <div className='w-full md:w-1/2 md:max-h-[700px]'>
            <div className='h-80 md:h-[700px]'>
              <div id='controls-carousel' class='relative w-full' data-carousel='static'>
                <div class='relative h-56 overflow-hidden rounded-lg md:h-96'>
                  <div class='hidden duration-700 ease-in-out' data-carousel-item>
                    <Image src={madera.image} class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt={madera.name} width={150} height={100} />
                  </div>
                  <div class='hidden duration-700 ease-in-out' data-carousel-item='active'>
                    <Image src={madera.image1} class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt={madera.name} width={150} height={100} />
                  </div>
                  <div class='hidden duration-700 ease-in-out' data-carousel-item>
                    <Image src={madera.image2} class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt={madera.name} width={150} height={100} />
                  </div>
                </div>
                <button type='button' class='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-prev>
                  <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg class='w-4 h-4 text-white dark:text-gray-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                      <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4' />
                    </svg>
                    <span class='sr-only'>Previous</span>
                  </span>
                </button>
                <button type='button' class='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-next>
                  <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg class='w-4 h-4 text-white dark:text-gray-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                      <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4' />
                    </svg>
                    <span class='sr-only'>Next</span>
                  </span>
                </button>
              </div>

            </div>
          </div>
          <div className='w-full pl-8 mt-8 md:relative md:self-center md:w-1/2 md:border-l-2 md:ml-4'>
            <p className='text-lg font-normal md:text-xl md:font-medium'>
              {madera.description}
            </p>
            <div className='flex items-end justify-end mt-5'>
              <Link href='/productos'>
                <button className='bg-[#98694C] btn w-20 hover:bg-[#EBC095] hover:text-black'><AiOutlineArrowLeft /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  )
}
