import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className='flex flex-col items-center text-center text-white'>
      <h1 className='my-12 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl xl:leading-snug xl:text-7xl 2xl:leading-snug 2xl:text-8xl'>
        Bienvenido a <br /> Tajamar Molduras
      </h1>
      <div data-aos='fade-down' className='xl:w-[600px] mx-8 text-lg sm:text-2xl md:text-2xl mb-3'>
        <p className='leading-relaxed'>
          Somos una empresa familiar, cuyos orígenes datan del año 1997,
          nacida en la localidad de Puerto Rico, provincia de Misiones,
          un proyecto familiar de instalación de una empresa dedicada a
          la industria maderera; en sus orígenes cortando tablas de
          pino, y luego de un proceso de aprendizaje, transformación y
          crecimiento pasar a cortar varias especies, ofreciendo
          productos variados.
        </p>
      </div>
    </main>
  )
}

export default Home
