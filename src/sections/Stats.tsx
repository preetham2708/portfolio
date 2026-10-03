import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 2, suffix: '', label: 'AI Projects' },
  { value: 4, suffix: '', label: 'Certificates' },
  { value: 200, suffix: '+', label: 'Training Hours' },
  { value: 15, suffix: '%', label: 'Prediction Improvement' },
]

function Stats() {
  const refs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = refs.current[i]
        if (!el) return
        const counter = { n: 0 }
        gsap.to(counter, {
          n: stat.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.n) + stat.suffix
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
          >
            <span
              ref={(el) => {
                refs.current[i] = el
              }}
              className="text-4xl font-bold text-sky-400"
            >
              0{stat.suffix}
            </span>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats