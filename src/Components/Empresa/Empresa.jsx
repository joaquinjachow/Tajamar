import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Empresa = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <main data-aos='fade-right' className='flex flex-col justify-center gap-5 px-6 mb-12 leading-relaxed text-black md:flex-row md:mt-20 md:gap-20'>
        <div className='flex flex-col w-auto md:w-80 xl:h-[500px]'>
          <h1 className='mt-4 mb-3 text-3xl font-semibold text-center text-[#C09030] md:mt-0'>VISIÓN</h1>
          <p className='text-justify'>Nuestro objetivo como empresa es que todos nuestros productos reflejen nuestro valor como marca. <br />
            Buscamos consolidarnos a través de la practicidad, durabilidad, diseños y precios accesibles a todos nuestros clientes, para que puedan disfrutar de cada rincón de su hogar. Como filosofía de empresa, se busca la perfección en cada uno de los procesos a los cuales son sometidos los materiales para lograr un producto único. <br />
            En nuestra visión, no solo buscamos consolidarnos como una marca líder en el mercado de madera, sino también como una empresa que inspire y promueva la innovación y el desarrollo en nuestro sector.
          </p>
        </div>
        <div className='flex flex-col w-auto md:w-80 xl:h-[500px]'>
          <h1 className='mb-3 text-3xl font-semibold text-center text-[#C09030] whitespace-nowrap'>MEDIO AMBIENTE</h1>
          <p className='text-justify'>
            Somos conscientes del impacto que cada uno genera en nuestro planeta, y por ello realizamos campañas de concientización ambiental y reforestación de nuestra provincia. En nuestra empresa, estamos comprometidos con el cuidado del medio ambiente y la promoción de prácticas sostenibles. Es por eso que trabajamos constantemente en la implementación de políticas y programas que minimicen nuestro impacto ambiental y contribuyan al cuidado de nuestro planeta.
          </p>
        </div>
        <div className='flex flex-col w-auto md:w-80 xl:h-[500px]'>
          <h1 className='mb-3 text-3xl font-semibold text-center text-[#C09030] '>MISIÓN</h1>
          <p className='text-justify text-pretty'>Ser una empresa referente para arquitectos, profesionales de la construcción y distribuidores.
            Nos enfocamos en brindar un servicio excepcional a nuestros clientes. Para nosotros, es fundamental que cada cliente se sienta valorado y apreciado, y por eso nos esforzamos por ofrecer un servicio de atención al cliente personalizado y de alta calidad. <br />
            Nuestro equipo de profesionales altamente capacitados está siempre disponible para brindar asesoramiento y orientación a nuestros clientes en todo momento, desde la selección de productos hasta la entrega y la instalación. <br />
          </p>
        </div>
      </main>
    </>
  )
}

export default Empresa
