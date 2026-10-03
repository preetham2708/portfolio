[IO.File]::WriteAllText("$PWD\src\sections\Hero.tsx", @'
import photo from '../assets/preetham-cutout.webp'
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
          <a href="https://github.com/preetham2708" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/saipreetham-votarikari" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative h-80 w-72 md:h-[34rem] md:w-[26rem]">
        <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 opacity-80 shadow-[0_0_80px_rgba(56,189,248,0.45)] md:h-[22rem] md:w-[22rem]" />
        <div className="absolute -bottom-3 left-1/2 h-[16.5rem] w-[16.5rem] -translate-x-1/2 rounded-full border border-sky-400/30 md:h-[24rem] md:w-[24rem]" />
        <img
          src={photo}
          alt="Saipreetham Votarikari"
          className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        />
        <span className="absolute left-0 top-16 hidden animate-float rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300 backdrop-blur md:block">
          LangGraph
        </span>
        <span className="absolute right-0 top-40 hidden animate-float rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300 backdrop-blur [animation-delay:1s] md:block">
          RAG
        </span>
        <span className="absolute bottom-28 left-2 hidden animate-float rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300 backdrop-blur [animation-delay:2s] md:block">
          MCP
        </span>
      </div>
    </section>
  )
}

export default Hero
'@)