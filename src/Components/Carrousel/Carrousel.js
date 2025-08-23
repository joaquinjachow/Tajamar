import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export function CarouselComponent ({ image, image1, image2, name }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState({ 0: true, 1: true, 2: true })

  const images = [image, image1, image2]

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const handleImageLoad = useCallback((index) => {
    setIsLoading(prev => ({ ...prev, [index]: false }))
  }, [])

  return (
    <div className='relative w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
      <div className='relative w-full h-full'>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isLoading[index] && (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
                <div className='w-8 h-8 border-4 border-[#766A5D] border-t-transparent rounded-full animate-spin' />
              </div>
            )}
            <Image
              src={img}
              alt={`${name} - imagen ${index + 1}`}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
              priority={index === 0}
              onLoad={() => handleImageLoad(index)}
              quality={85}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute flex items-center justify-center w-10 h-10 text-white transition-all duration-200 -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110'
        aria-label='Imagen anterior'
      >
        <AiOutlineLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute flex items-center justify-center w-10 h-10 text-white transition-all duration-200 -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110'
        aria-label='Siguiente imagen'
      >
        <AiOutlineRight size={20} />
      </button>
      <div className='absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
      <div className='absolute flex gap-1 bottom-4 right-4'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? 'border-white scale-110'
                : 'border-white/50 hover:border-white/70'
            }`}
          >
            <Image
              src={img}
              alt={`Miniatura ${index + 1}`}
              fill
              sizes='48px'
              className='object-cover'
              quality={60}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
