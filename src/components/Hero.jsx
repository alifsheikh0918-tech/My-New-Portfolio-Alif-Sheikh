import { useState } from 'react'
import { profile } from '../data.js'
import SocialLinks from './SocialLinks.jsx'

const floaters = [
  { t: 'TS', c: 'text-brand-light', pos: 'left-[-2%] top-[8%]', d: '' },
  { t: 'JS', c: 'text-yellow-300', pos: 'left-[-8%] top-[40%]', d: '[animation-delay:-1s]' },
  { t: '⚛', c: 'text-brand-light', pos: 'right-[0%] top-[2%]', d: '[animation-delay:-2s]' },
  { t: 'Node', c: 'text-green-400', pos: 'right-[-4%] bottom-[22%]', d: '[animation-delay:-3s]' },
]

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-68px)] items-center bg-[radial-gradient(ellipse_at_70%_35%,rgba(47,107,255,0.28),transparent_60%),radial-gradient(ellipse_at_50%_100%,#0a1a4a,transparent_70%)]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-5 flex items-center justify-center gap-4 text-xs tracking-[0.25em] text-slate-300 lg:justify-start">
            <span className="hidden h-px w-10 bg-brand sm:block" />WELCOME TO MY PORTFOLIO
          </div>
          <h1 className="text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-brand to-[#7fd0ff] bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl">
          {profile.role} <span className="text-brand-light">{profile.roleAccent}</span>
          </p>

          <p className="mb-8 mt-2 text-base text-muted sm:text-lg">
          Software Development student. I build web apps with React and Node.js.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold shadow-[0_0_30px_rgba(47,107,255,0.45)] transition hover:-translate-y-0.5 hover:bg-[#4a7fff]">
            Let's Work Together <span aria-hidden>↗</span>
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted lg:justify-start">
            Connect with me <SocialLinks boxed />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-[min(340px,78vw)] sm:w-[400px]">
            <div className="absolute inset-0 grid place-items-center overflow-hidden rounded-full border border-brand/40 bg-[radial-gradient(circle_at_50%_40%,#2f6bff,#0a1a5e_70%)] shadow-[0_0_90px_rgba(47,107,255,0.35)]">
              {imgOk ? (
                <img src={profile.photo} alt={profile.name} onError={() => setImgOk(false)} className="absolute inset-0 h-full w-full object-cover object-top" />
              ) : (
                <svg viewBox="0 0 100 100" className="mt-[20%] w-[70%]"><circle cx="50" cy="32" r="18" fill="#0a1230" /><path d="M10 100c0-26 18-42 40-42s40 16 40 42z" fill="#0a1230" /></svg>
              )}
            </div>
            {floaters.map((f) => (
              <div key={f.t} className={`absolute animate-float rounded-xl border border-line bg-[#0b1233] px-3 py-2 text-sm font-bold ${f.c} ${f.pos} ${f.d}`}>{f.t}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center text-[10px] tracking-[0.3em] text-muted sm:block">
        SCROLL
        <div className="relative mx-auto mt-2 h-6 w-3.5 rounded-lg border border-line">
          <span className="absolute left-1/2 top-1 h-1.5 w-[3px] -translate-x-1/2 animate-wheel rounded bg-brand" />
        </div>
      </div>
    </section>
  )
}
