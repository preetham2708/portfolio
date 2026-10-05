import photo from '../assets/preetham-tall.jpg'
import TypingText from '../components/TypingText'

const roles = ['Generative AI Developer', 'Data Scientist', 'RAG & LangGraph Builder']

function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <p className="mb-3 text-sky-400">Hi, I'm</p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Saipreetham Votarikari
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-sky-400 md:text-3xl">
          Agentic AI & ML Engineer
        </h2>
        <p className="mt-3 h-7 text-lg text-slate-400">
          <TypingText words={roles} />
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#projects" className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400">
            View Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-lg border border-sky-400 px-6 py-3 font-semibold text-sky-400 transition hover:bg-sky-400 hover:text-slate-950">
            Resume
          </a>
          <a href="https://github.com/preetham2708" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/saipreetham-votarikari" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            LinkedIn
          </a>
        </div>
      </div>
      <img
        src={photo}
        alt="Saipreetham Votarikari"
        className="h-64 w-44 rounded-3xl object-cover object-[center_55%] shadow-2xl shadow-sky-500/20 ring-1 ring-white/10 md:h-[30rem] md:w-80"
      />
    </section>
  )
}

export default Hero