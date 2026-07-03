import { useEffect, useState } from 'react'
import FloatingShapesWireframe from './FloatingShapesWireframe'

export default function FloatingShapesWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Completely remove 3D on mobile for better scrolling
  if (isMobile) return null

  return <FloatingShapesWireframe />
}