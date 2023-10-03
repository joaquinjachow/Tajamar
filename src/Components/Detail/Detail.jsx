import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Maderas from '../MaderaProductos/Maderas'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import { useRouter } from 'next/router'

export default function Detail () {
  SwiperCore.use([Navigation])
  const router = useRouter()
  const { link } = router.query
  const madera = Maderas.find((el) => el.link === link)
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
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
              >
                <SwiperSlide><Image src={madera.image} alt={madera.name} className='object-fit w-full h-80 md:h-[700px]' /></SwiperSlide>
                <SwiperSlide><Image src={madera.image1} alt={madera.name} className='object-fit w-full h-80 md:h-[700px]' /></SwiperSlide>
                <SwiperSlide><Image src={madera.image2} alt={madera.name} className='object-fit w-full h-80 md:h-[700px]' /></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className='w-full pl-8 mt-8 md:relative md:self-center md:w-1/2 md:border-l-2 md:ml-4'>
            <p className='text-lg font-normal md:text-xl md:font-medium'>
              {madera.description}
            </p>
            <div className='flex items-end justify-end mt-5'>
              <Link href='/productos'>
                <a className='bg-[#98694C] btn w-20 hover:bg-[#EBC095] hover:text-black'><AiOutlineArrowLeft /></a>
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
