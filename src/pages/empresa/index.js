import Empresa from 'src/Components/Empresa/Empresa'
import Navbar from 'src/Components/Navbar/Navbar'
import Footer from 'src/Components/Footer/Footer'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Empresa | Tajamar</title>
      </Head>
      <div className='relative bg-fixed bg-center bg-cover bg-EmpresaFondo'>
        <div className='relative bg-black bg-opacity-30'>
          <Navbar />
          <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-72'>La Empresa</h1>
        </div>
      </div>
      <main>
        <Empresa />
      </main>
      <Footer />
    </>
  )
}
export default index
