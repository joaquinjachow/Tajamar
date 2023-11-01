import React, { useEffect } from 'react'
import Link from 'next/link'
import Card from '../Card/Card'
import Maderas from '../MaderaProductos/Maderas'

const Productos = () => {
  useEffect(() => {
    document.title = 'Productos | Tajamar'
  }, [])
  return (
    <>
      <main className='container mx-auto mb-10 md:mt-10'>
        <div className='flex flex-col gap-4 p-4 md:grid md:grid-cols-3 gap-y-10 '>
          {Maderas.map((el) => {
            return (
              <Link href={'/' + el?.link} key={el?.name}>
                <div className='flex justify-center'>
                  <Card
                    name={el?.name}
                    img={el?.image}
                    link={el?.link}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Productos
