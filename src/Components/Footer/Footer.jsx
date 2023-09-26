import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export default function Nabvar () {
  return (
    <footer className='footer items-center p-4 text-white bg-[#DAA468] flex justify-around'>
      <div className='items-center grid-flow-col'>
        <p>Copyright © 2023 - All right reserved - Tajamar Molduras</p>
      </div>
      <div className='grid-flow-col gap-4'>
        <ul className='flex items-center gap-3'>
          <li><a href='https://www.instagram.com/tajamarmolduras/' target='_blank' rel='noopener noreferrer'><AiOutlineInstagram size={30} /></a></li>
          <li><a href='https://www.facebook.com/profile.php?id=100090250681281' target='_blank' rel='noopener noreferrer'><BsFacebook size={25} /></a></li>
        </ul>
      </div>
    </footer>
  )
}
