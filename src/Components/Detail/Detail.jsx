import React, { useEffect } from 'react'
import Link from 'next/link'
import Maderas from '../MaderaProductos/Maderas'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { CarouselComponent } from '../Carrousel/Carrousel'

const Detail = () => {
  const router = useRouter()
  const { link } = router.query
  const madera = Maderas?.find((el) => el.link === link)

  useEffect(() => {
    if (madera) {
      document.title = `${madera.name} | Tajamar`
    }
  }, [madera])
  if (!madera) {
    return (
      <>
        <Navbar />
        <h1 className='mt-10 text-3xl text-center'>Producto no encontrado</h1>
        <Footer />
      </>
    )
  }
  console.log(madera)
  return (
    <>
      <div className='bg-fixed bg-center bg-cover bg-ProductosFondo'>
        <Navbar />
        <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-52'>{madera.name}</h1>
      </div>
      <div className='container mx-auto mt-4 md:mt-12 md:mb-12'>
        <div className='flex flex-col mx-2 md:flex-row'>
          <div className='w-full md:w-1/2 md:max-h-[700px]'>
            <CarouselComponent image={madera.image} image1={madera.image1} image2={madera.image2} name={madera.name} />
          </div>
          <div className='w-full pl-8 mt-8 md:relative md:self-center md:w-1/2 md:border-l-2 md:ml-4'>
            <p className='text-lg font-normal text-black md:text-xl md:font-medium'>
              {madera.description}
            </p>
            <div className='flex items-end justify-end mt-5'>
              <Link href='/productos'>
                <button className='w-20 btn bg-wood hover:bg-yellow-450 hover:text-black'><AiOutlineArrowLeft /></button>
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

export default Detail
