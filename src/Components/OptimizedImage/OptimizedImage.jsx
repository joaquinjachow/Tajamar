import React from 'react'
import Image from 'next/image'
import useLazyLoading from '../../hooks/useLazyLoading'

const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  quality = 85,
  sizes = '(max-width: 768px) 100vw, 50vw',
  width,
  height,
  fill = false,
  ...props
}) => {
  const { imgRef, isLoaded, isInView, handleLoad } = useLazyLoading()

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse'>
          <div className='w-8 h-8 border-4 border-[#766A5D] border-t-transparent rounded-full animate-spin' />
        </div>
      )}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          priority={priority}
          quality={quality}
          onLoad={handleLoad}
          {...props}
        />
      )}
    </div>
  )
}

export default OptimizedImage
