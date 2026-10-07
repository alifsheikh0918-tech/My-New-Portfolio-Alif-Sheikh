import { techBadges } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 text-center sm:px-8 sm:py-32">
      <p className="mx-auto mb-10 max-w-xl text-lg sm:text-2xl">
        I design and build fast,  <span className="text-brand-light">accessible web applications,</span> from the interface to the database. 
      </p>
      <div className="mx-auto mb-9 flex max-w-sm flex-wrap justify-center gap-3.5">
        {techBadges.map((b, i) => (
          <span key={i} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-panel text-sm font-bold text-brand-light">{b}</span>
        ))}
      </div>
      <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand to-[#1a3fb0] text-4xl shadow-[0_0_60px_rgba(47,107,255,0.55)]">👨‍💻</div>
    </section>
  )
}
