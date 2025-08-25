import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Maderas from '../MaderaProductos/Maderas'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { CarouselComponent } from '../Carrousel/Carrousel'
import Head from 'next/head'

const Detail = () => {
  const router = useRouter()
  const { link } = router.query
  const [loading, setLoading] = useState(true)
  const [madera, setMadera] = useState(null)

  useEffect(() => {
    if (router.isReady) {
      if (typeof link === 'string' && link.trim()) {
        const foundMadera = Maderas?.find((el) => el.link === link)
        setMadera(foundMadera)
      }
      setLoading(false)
    }
  }, [router.isReady, link])

  useEffect(() => {
    if (madera) {
      document.title = `${madera.name} | Tajamar`
    } else if (!loading && link) {
      document.title = 'Producto no encontrado | Tajamar'
    }
  }, [madera, loading, link])

  if (loading) {
    return (
      <>
        <Head>
          <title>Cargando... | Tajamar</title>
        </Head>
        <Navbar />
        <div className='flex items-center justify-center min-h-screen'>
          <div className='text-center'>
            <div className='mb-4 text-4xl animate-spin'>⚙️</div>
            <h1 className='text-xl text-gray-600'>Cargando producto...</h1>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!madera) {
    return (
      <>
        <Head>
          <title>Producto no encontrado | Tajamar</title>
          <meta name='description' content='El producto solicitado no fue encontrado en nuestro catálogo.' />
        </Head>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen px-4'>
          <div className='text-center'>
            <h1 className='mb-4 text-4xl font-bold text-gray-800'>🔍 Producto no encontrado</h1>
            <p className='mb-6 text-lg text-gray-600'>
              El producto que buscas no existe o ha sido removido de nuestro catálogo.
            </p>
            <div className='space-x-4'>
              <Link href='/productos'>
                <button className='px-6 py-3 text-white transition duration-300 rounded-lg bg-wood hover:bg-yellow-450 hover:text-black'>
                  Ver todos los productos
                </button>
              </Link>
              <Link href='/'>
                <button className='px-6 py-3 text-gray-700 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300'>
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{madera.name} | Tajamar</title>
        <meta name='description' content={`${madera.description.substring(0, 160)}...`} />
        <meta name='keywords' content={`${madera.name}, madera, Tajamar, molduras, ${madera.link}`} />
      </Head>
      <div className='bg-fixed bg-center bg-cover bg-ProductosFondo'>
        <Navbar />
        <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-52'>{madera.name}</h1>
      </div>
      <div className='container px-4 py-8 mx-auto max-w-7xl'>
        <div className='grid items-start gap-8 lg:grid-cols-2'>
          <div className='w-full'>
            <CarouselComponent image={madera.image} image1={madera.image1} image2={madera.image2} name={madera.name} />
          </div>
          <div className='p-8 bg-white rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold mb-6 text-[#746757]'>{madera.name}</h2>
            <div className='prose max-w-none'>
              <p className='mb-8 text-lg leading-relaxed text-gray-700'>
                {madera.description}
              </p>
            </div>
            <div className='pt-6 mb-8 border-t border-gray-200'>
              <h3 className='text-xl font-semibold mb-4 text-[#746757]'>Información del producto</h3>
              <div className='grid gap-3 text-sm'>
                <div className='flex justify-between'>
                  <span className='font-medium text-gray-600'>Categoría:</span>
                  <span className='text-gray-900'>Madera</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium text-gray-600'>Material:</span>
                  <span className='text-gray-900'>Natural</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium text-gray-600'>Disponibilidad:</span>
                  <span className='font-medium text-green-600'>En stock</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Link href='/contacto' className='flex-1'>
                <button className='w-full px-6 py-3 bg-[#766A5D] text-white font-semibold rounded-lg hover:bg-[#5A5248] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#766A5D]/20'>
                  Solicitar cotización
                </button>
              </Link>
              <Link href='/productos'>
                <button className='flex items-center gap-2 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200'>
                  <AiOutlineArrowLeft />
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='text-2xl font-bold mb-8 text-center text-[#746757]'>¿Por qué elegir nuestros productos?</h3>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-[#766A5D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-white'>🌳</span>
              </div>
              <h4 className='mb-2 text-lg font-semibold'>Calidad Premium</h4>
              <p className='text-gray-600'>Maderas seleccionadas con los más altos estándares de calidad.</p>
            </div>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-[#766A5D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-white'>🚚</span>
              </div>
              <h4 className='mb-2 text-lg font-semibold'>Entrega Rápida</h4>
              <p className='text-gray-600'>Enviamos a todo Córdoba con la mejor logística del mercado.</p>
            </div>
            <div className='p-6 text-center bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-[#766A5D] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-white'>👨‍🔧</span>
              </div>
              <h4 className='mb-2 text-lg font-semibold'>Asesoramiento</h4>
              <p className='text-gray-600'>Expertos en madera para guiarte en tu proyecto.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail
