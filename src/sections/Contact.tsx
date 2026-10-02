const contacts = [
  { label: 'Email', value: 'saipreetham.votarikari@gmail.com', href: 'mailto:saipreetham.votarikari@gmail.com' },
  { label: 'Phone', value: '7995768056', href: 'tel:+917995768056' },
  { label: 'GitHub', value: 'github.com/preetham2708', href: 'https://github.com/preetham2708' },
  { label: 'LinkedIn', value: 'linkedin.com/in/saipreetham-votarikari', href: 'https://linkedin.com/in/saipreetham-votarikari' },
]

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Get In <span className="text-sky-400">Touch</span>
      </h2>
      <p className="mt-4 max-w-2xl text-slate-300">
        I am open to Agentic AI, Generative AI, Machine Learning and Data Science roles.
        Feel free to reach out.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/50"
          >
            <p className="text-sm text-sky-400">{item.label}</p>
            <p className="mt-1 break-all text-slate-200">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact