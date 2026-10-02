import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        My <span className="text-sky-400">Projects</span>
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10"
          >
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sky-400">{project.subtitle}</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-sky-400">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-6">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-sky-400">
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-sky-400">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects