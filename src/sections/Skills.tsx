import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        My <span className="text-sky-400">Skills</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/50"
          >
            <h3 className="text-lg font-semibold text-sky-400">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills