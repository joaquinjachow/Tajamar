import Head from 'next/head'
import React from 'react'
import Home from 'src/Components/Home/Home'
import Navbar from 'src/Components/Navbar/Navbar'

const Index = () => {
  return (
    <>
      <Head>
        <title>Inicio | Tajamar</title>
      </Head>
      <div className='relative'>
        <div className='relative inset-0 bg-cover bg-MaderaFondo'>
          <div className='min-h-screen bg-black backdrop-blur-sm bg-opacity-30'>
            <Navbar />
            <main>
              <Home />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
