import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Card = ({ name, img, link }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div data-aos='flip-left' className='shadow-xl card w-96 bg-[#DA9F6D] max-h-96 rounded-2xl'>
      <Link href={`/productos/${link}`}>
        <div>
          <figure>
            <motion.img
              className='w-full h-full bg-center bg-cover max-h-64 rounded-t-2xl'
              src={img?.src}
              alt={img}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
        </div>
      </Link>
      <div className='card-body'>
        <h2 className='font-bold text-white card-title'>{name}</h2>
      </div>
    </div>
  )
}
export default Card
