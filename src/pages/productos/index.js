import Productos from 'src/Components/Productos/Productos'
import Nabvar from 'src/Components/Navbar/Navbar'
import Footer from 'src/Components/Footer/Footer'

const index = () => {
  return (
    <>
      <title>Productos | Tajamar</title>
      <div className='relative bg-fixed bg-center bg-cover bg-ProductosFondo'>
        <div className='relative bg-black bg-opacity-30'>
          <Nabvar />
          <h1 className='pb-6 text-5xl font-bold text-center text-white whitespace-nowrap md:pb-8 md:text-7xl lg:text-start lg:pt-8 xl:pt-16 xl:pb-16 lg:ml-20 xl:ml-36 2xl:ml-52'>Productos</h1>
        </div>
      </div>
      <main>
        <Productos />
      </main>
      <Footer />
    </>
  )
}
export default index
