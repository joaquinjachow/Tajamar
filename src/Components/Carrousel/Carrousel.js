import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'

export function CarouselComponent ({ image, image1, image2, name }) {
  return (
    <Carousel
      className='rounded-xl'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src={image}
        alt={name}
        className='object-cover w-full h-full'
      />
      <Image
        src={image1}
        alt={name}
        className='object-cover w-full h-full'
      />
      <Image
        src={image2}
        alt={name}
        className='object-cover w-full h-full'
      />
    </Carousel>
  )
}
