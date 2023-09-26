import React, { useEffect } from 'react'
// import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Link from 'next/link'
import Card from '../Card/Card'
import Maderas from '../MaderaProductos/Maderas'

export default function Productos () {
  useEffect(() => {
    document.title = 'Productos | Tajamar'
  }, [])
  return (
    <>
      <div className='relative bg-fixed bg-center bg-cover bg-ProductosFondo'>
        <div className='relative bg-black bg-opacity-30'>
          {/* <Navbar /> */}
          <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-52'>Productos</h1>
        </div>
      </div>
      <main className='container mx-auto mb-10 md:mt-10'>
        <div className='flex flex-col gap-4 p-4 md:grid md:grid-cols-3 gap-y-10 '>
          {Maderas.map((el) => {
            return (
              <Link href={'/' + el.link} key={el.name}>
                <div className='flex justify-center'>
                  <Card
                    name={el.name}
                    img={el.image}
                    link={el.link}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
