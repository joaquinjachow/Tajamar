import Contacto from 'src/Components/Contacto/Contacto'
import Navbar from 'src/Components/Navbar/Navbar'
import Footer from 'src/Components/Footer/Footer'

const index = () => {
  return (
    <>
      <div className='relative bg-center bg-cover bg-ContactoFondo'>
        <div className='relative bg-black bg-opacity-30'>
          <Navbar />
          <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-96'>Contacto</h1>
        </div>
      </div>
      <main>
        <title>Contacto | Tajamar</title>
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
export default index
