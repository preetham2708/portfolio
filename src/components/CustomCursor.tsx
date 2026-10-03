import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const xTo = gsap.quickTo(ring.current, 'x', { duration: 0.3, ease: 'power3' })
    const yTo = gsap.quickTo(ring.current, 'y', { duration: 0.3, ease: 'power3' })

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ring}
      className="pointer-events-none fixed left-0 top-0 z-[60] -ml-4 -mt-4 hidden h-8 w-8 rounded-full border border-sky-400 shadow-lg shadow-sky-400/40 md:block"
    />
  )
}

export default CustomCursor