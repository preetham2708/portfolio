import { experiences, certificates } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Experience & <span className="text-sky-400">Certificates</span>
      </h2>

      <div className="mt-12 border-l-2 border-sky-400/40 pl-6">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-sky-400 ring-4 ring-slate-950" />
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <p className="text-sky-400">{exp.company}</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-sky-400">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/50"
          >
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-sky-400">{cert.issuer}</p>
            <p className="mt-3 text-slate-300">{cert.description}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto pt-4 font-semibold text-white hover:text-sky-400">
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience