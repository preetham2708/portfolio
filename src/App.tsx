import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Reveal from './components/Reveal'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Contact /></Reveal>
    </div>
  )
}

export default App