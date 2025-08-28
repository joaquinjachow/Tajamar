import { useState, useCallback } from 'react'

const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = useCallback((name, value) => {
    const rules = validationRules[name]
    if (!rules) return ''
    for (const rule of rules) {
      const error = rule(value)
      if (error) return error
    }
    return ''
  }, [validationRules])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }, [touched, validateField])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [validateField])

  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, values[field] || '')
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })
    setErrors(newErrors)
    setTouched(Object.keys(validationRules).reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {}))
    return isValid
  }, [values, validateField, validationRules])

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
  }
}

export const validationRules = {
  required: (value) => {
    if (!value || value.toString().trim() === '') {
      return 'Este campo es requerido'
    }
    return ''
  },
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value && !emailRegex.test(value)) {
      return 'Por favor ingresa un email válido'
    }
    return ''
  },
  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Debe tener al menos ${min} caracteres`
    }
    return ''
  },
  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `No puede tener más de ${max} caracteres`
    }
    return ''
  }
}

export default useFormValidation
