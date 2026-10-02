import photo from '../assets/preetham-square.jpg'

const facts = [
  { label: 'Education', value: 'B.Tech in Computer Science, CMR College of Engineering & Technology (2021-2025)' },
  { label: 'Focus', value: 'Agentic AI, Generative AI, RAG and Machine Learning' },
  { label: 'Location', value: 'Hyderabad, Telangana' },
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        About <span className="text-sky-400">Me</span>
      </h2>
      <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
        <img
          src={photo}
          alt="Saipreetham Votarikari"
          className="mx-auto w-72 rounded-3xl object-cover shadow-2xl shadow-sky-500/20 ring-1 ring-white/10 md:w-96"
        />
        <div>
          <p className="text-lg leading-relaxed text-slate-300">
            I am a Computer Science graduate who builds Agentic AI and Generative AI
            applications. I have worked with LangGraph, MCP, RAG and LLM integrations,
            and I like turning ideas into production-ready AI systems.
          </p>
          <div className="mt-8 space-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-sky-400">{fact.label}</p>
                <p className="mt-1 text-slate-200">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About