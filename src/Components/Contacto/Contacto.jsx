import React, { useState } from 'react'
import useFormValidation, { validationRules } from '../../hooks/useFormValidation'

const Contacto = () => {
  const [submitStatus, setSubmitStatus] = useState('')

  const formValidationRules = {
    name: [validationRules.required, validationRules.minLength(2), validationRules.maxLength(50)],
    email: [validationRules.required, validationRules.email],
    message: [validationRules.required, validationRules.minLength(10), validationRules.maxLength(500)],
    enterprise: [validationRules.maxLength(50)]
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
  } = useFormValidation({
    name: '',
    email: '',
    message: '',
    enterprise: ''
  }, formValidationRules)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setIsSubmitting(true)
    setSubmitStatus('')
    try {
      const formData = new FormData()
      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })
      const response = await fetch('https://getform.io/f/e13bf14d-eb9f-4ae8-8b65-af75c870b4ce', {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        setSubmitStatus('success')
        resetForm()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClassName = (fieldName) => {
    const baseClass = 'px-4 py-4 text-lg rounded-lg transition-all duration-200 border-2 focus:outline-none font-medium'
    const hasError = touched[fieldName] && errors[fieldName]
    if (hasError) {
      return `${baseClass} bg-red-50 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-red-900`
    }
    if (touched[fieldName] && !errors[fieldName] && values[fieldName]) {
      return `${baseClass} bg-green-50 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-green-900`
    }
    return `${baseClass} bg-white border-gray-300 focus:border-wood focus:ring-2 focus:ring-wood/20 text-gray-900 placeholder-gray-500`
  }

  return (
    <>
      <main className='mx-2 lg:ml-[10%] 2xl:ml-[20%] md:max-w-5xl md:ml-2 md:mt-4 text-black'>
        <div className='grid gap-6 mb-6 lg:grid-cols-2'>
          <div className='p-8 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-[#746757]'>Envíanos un mensaje</h2>
            {submitStatus === 'success' && (
              <div className='p-4 mb-6 text-green-700 bg-green-100 border border-green-300 rounded-lg'>
                ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className='p-4 mb-6 text-red-700 bg-red-100 border border-red-300 rounded-lg'>
                ❌ Error al enviar el mensaje. Por favor intenta nuevamente.
              </div>
            )}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    type='text'
                    placeholder='Nombre *'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClassName('name')} w-full`}
                    disabled={isSubmitting}
                    required
                  />
                  {touched.name && errors.name && (
                    <p className='mt-2 text-sm font-medium text-red-600'>{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type='email'
                    placeholder='Correo Electrónico *'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClassName('email')} w-full`}
                    disabled={isSubmitting}
                    required
                  />
                  {touched.email && errors.email && (
                    <p className='mt-2 text-sm font-medium text-red-600'>{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Empresa (opcional)'
                  name='enterprise'
                  value={values.enterprise}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClassName('enterprise')} w-full`}
                  disabled={isSubmitting}
                />
                {touched.enterprise && errors.enterprise && (
                  <p className='mt-2 text-sm font-medium text-red-600'>{errors.enterprise}</p>
                )}
              </div>
              <div>
                <textarea
                  placeholder='Mensaje *'
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows='3'
                  className={`${getInputClassName('message')} w-full resize-none`}
                  disabled={isSubmitting}
                  required
                />
                {touched.message && errors.message && (
                  <p className='mt-2 text-sm font-medium text-red-600'>{errors.message}</p>
                )}
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-3 px-4 font-semibold text-white bg-[#766A5D] rounded-lg hover:bg-[#5A5248] focus:outline-none focus:ring-4 focus:ring-[#766A5D]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
          <div className='p-8 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-[#746757]'>Información de contacto</h2>
            <div className='space-y-6'>
              <div className='flex items-start gap-3'>
                <span className='text-2xl text-[#766A5D] mt-1'>📞</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Teléfono</h3>
                  <a href='tel:+3517037353' className='text-[#766A5D] hover:text-[#5A5248] transition-colors text-lg'>
                    351-703-7353
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-2xl text-[#766A5D] mt-1'>📧</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Email</h3>
                  <a href='mailto:tajamarmolduras@gmail.com' className='text-[#766A5D] hover:text-[#5A5248] transition-colors text-lg break-all'>
                    tajamarmolduras@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-2xl text-[#766A5D] mt-1'>📍</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Dirección</h3>
                  <p className='text-lg text-gray-600'>Piero Astori 1300</p>
                  <p className='text-gray-600'>Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-8 mb-8 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold mb-6 text-[#746757]'>Nuestra ubicación</h2>
          <div className='relative w-full h-64 overflow-hidden rounded-lg md:h-80 lg:h-96'>
            <iframe
              className='absolute inset-0 w-full h-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.8152168865006!2d-64.12329752289239!3d-31.396752246411985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943297de0983efbf%3A0x782970c790396c1f!2sAlpha%20Transportes%20S.A.!5e0!3m2!1ses-419!2sar!4v1679343722028!5m2!1ses-419!2sar'
              title='Ubicación de Tajamar Molduras'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Contacto
