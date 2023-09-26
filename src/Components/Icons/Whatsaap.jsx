import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=3517037353'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed p-4 text-white bg-green-500 rounded-full shadow-lg z-[10] bottom-5 right-5 hover:bg-green-600'
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

export default WhatsAppButton
