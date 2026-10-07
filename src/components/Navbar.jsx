import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'
import { MenuIcon, CloseIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="leading-none">
          <span className="block text-2xl font-bold">{profile.firstName}<span className="text-brand">.</span></span>
          <span className="text-[9px] tracking-[0.3em] text-muted">DEVELOPER</span>
        </a>

        <ul className="hidden items-center gap-9 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`relative pb-1 transition hover:text-white ${active === l.href ? 'text-white' : 'text-muted'}`}>
                {l.label}
                {active === l.href && <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-brand" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block"><SocialLinks /></div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel md:hidden"
          onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink/95 px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className={`block py-3 text-base ${active === l.href ? 'text-white' : 'text-muted'}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
      )}
    </header>
  )
}
