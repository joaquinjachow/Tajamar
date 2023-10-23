import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Maderas from '../MaderaProductos/Maderas'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function Detail () {
  const router = useRouter()
  const { link } = router.query
  const madera = Maderas?.find((el) => el.link === link)
  const [currentImage, setCurrentImage] = useState(0)

  if (!madera) {
    return (
      <>
        <Navbar />
        <h1 className='mt-10 text-3xl text-center'>Producto no encontrado</h1>
        <Footer />
      </>
    )
  }

  const images = [madera?.image, madera?.image1, madera?.image2]

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
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
            <div className='h-80 md:h-[700px] relative flex items-center'>
              <button onClick={prevImage} className='absolute left-0 p-2 bg-[#98694C] hover:bg-[#EBC095] bg-opacity-25 rounded-full'>
                <AiOutlineArrowLeft size={28} color='#ffffff' />
              </button>
              <Image src={images[currentImage]} alt={madera.name} className='object-cover w-full h-full' />
              <button onClick={nextImage} className='absolute right-0 p-2 bg-[#98694C] hover:bg-[#EBC095] bg-opacity-25 rounded-full'>
                <AiOutlineArrowRight size={28} color='#ffffff' />
              </button>
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
