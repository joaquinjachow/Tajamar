import React, { useState, useCallback, useEffect } from 'react'
import Logo from '../../../public/assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, closeMenu])

  return (
    <>
      <nav>
        <div className='flex items-center justify-between max-w-screen-xl p-4 mx-auto'>
          <Link href='/' className='flex'>
            <Image src={Logo} width={271} height={56} className='md:h-14' alt='Logo-Tajamar-Molduras' />
          </Link>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-4 mt-4 text-lg font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
              <Link href='/'><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400' aria-current='page' href='#'>Inicio</button></li></Link>
              <Link href='/empresa'><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400' href='#'>Empresa</button></li></Link>
              <Link href='/productos'><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400' href='#'>Productos</button></li></Link>
              <Link href='/contacto'><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400' href='#'>Contacto</button></li></Link>
            </ul>
          </div>
          <button
            className='md:hidden'
            onClick={toggleMenu}
            aria-label='Abrir menú de navegación'
            aria-expanded={open}
          >
            <AiOutlineMenu size={30} className='text-white' />
          </button>
        </div>
        <div
          className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-[3]`}
          onClick={closeMenu}
          aria-hidden='true'
        />
        <div className={`${open ? 'w-80' : 'w-0'} bg-[#fafbfd] min-h-screen fixed top-0 left-0 transition-all duration-300 z-[3]`}>
          <div className={`${!open && 'hidden'} pt-3`}>
            <button
              className='py-3 ml-4 text-black'
              onClick={closeMenu}
              aria-label='Cerrar menú de navegación'
            >
              <AiOutlineClose size={30} />
            </button>
            <ul className='flex flex-col p-4 text-[#18171c]'>
              <Link href='/' onClick={closeMenu}><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400' aria-current='page'>Inicio</button></li></Link>
              <Link href='/empresa' onClick={closeMenu}><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400'>Empresa</button></li></Link>
              <Link href='/productos' onClick={closeMenu}><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400'>Productos</button></li></Link>
              <Link href='/contacto' onClick={closeMenu}><li><button className='block py-2 pl-3 pr-4 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-yellow-400'>Contacto</button></li></Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
