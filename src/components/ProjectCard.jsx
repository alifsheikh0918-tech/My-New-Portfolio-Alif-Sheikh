import { useState } from 'react'
import { GithubIcon, ExternalIcon } from './Icons.jsx'

export default function ProjectCard({ p, reverse }) {
  const [imgOk, setImgOk] = useState(true)
  const iconBtn = 'grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-line hover:text-white'
  return (
    <article className={`flex flex-col items-center gap-8 lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${p.from} ${p.via} ${p.to} lg:w-[56%]`}>
        <p className="absolute left-[8%] top-[22%] max-w-[55%] text-lg font-bold leading-tight sm:text-2xl">{p.heading}</p>
        {imgOk && <img src={p.image} alt={p.title} loading="lazy" onError={() => setImgOk(false)} className="absolute inset-0 h-full w-full object-cover object-top" />}
      </div>

      <div className={`w-full lg:w-[44%] ${reverse ? 'lg:text-right' : ''}`}>
        <span className="text-sm text-brand-light">Featured Project</span>
        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">{p.title}</h3>
        <p className="rounded-2xl border border-line bg-panel p-5 text-[15px] leading-relaxed text-slate-300">{p.desc}</p>
        <div className={`my-4 flex flex-wrap gap-2.5 ${reverse ? 'lg:justify-end' : ''}`}>
          {p.tags.map((t) => <span key={t} className="rounded-lg border border-line bg-[#0c1a4a] px-3 py-1 text-xs text-brand-light">{t}</span>)}
        </div>
        <div className={`flex gap-2 ${reverse ? 'lg:justify-end' : ''}`}>
          {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label="Source code" className={iconBtn}><GithubIcon /></a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo" className={iconBtn}><ExternalIcon /></a>}
        </div>
      </div>
    </article>
  )
}
