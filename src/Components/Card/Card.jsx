import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import OptimizedImage from '../OptimizedImage/OptimizedImage'

const Card = ({ name, img, link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return name && img && link
    ? (
      <div data-aos='flip-left' className='shadow-xl card w-96 bg-[#DA9F6D] max-h-96 rounded-2xl'>
        <Link href={`/productos/${link}`}>
          <div>
            <figure className='relative h-64 overflow-hidden rounded-t-2xl'>
              <motion.div
                className='w-full h-full'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <OptimizedImage
                  src={img}
                  alt={`${name} - Tajamar Molduras`}
                  className='w-full h-full rounded-t-2xl'
                  width={384}
                  height={256}
                  quality={80}
                  sizes='(max-width: 768px) 100vw, 384px'
                />
              </motion.div>
            </figure>
          </div>
        </Link>
        <div className='card-body'>
          <h2 className='font-bold text-white card-title'>{name}</h2>
        </div>
      </div>
      )
    : null
}
export default Card
