import { useEffect } from "react"

const useResize = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', callback)

    return () => window.removeEventListener('resize', callback)
  }, [])
}

export default useResize;
