import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      ...options
    })
    return () => {
      AOS.refresh()
    }
  }, [])
}

export default useAOS
