import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre sus productos de madera.')
    const phoneNumber = '3517037353'
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className='fixed p-4 text-white bg-green-500 rounded-full shadow-lg z-[50] bottom-5 right-5 hover:bg-green-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/20'
      aria-label='Contactar por WhatsApp'
      title='Contactar por WhatsApp'
    >
      <FaWhatsapp size={24} />
    </button>
  )
}

export default WhatsAppButton
