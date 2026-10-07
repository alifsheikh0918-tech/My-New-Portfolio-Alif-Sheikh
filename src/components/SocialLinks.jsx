import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.jsx'
import { profile } from '../data.js'

export default function SocialLinks({ boxed = false, withGithub = true }) {
  const cls = boxed
    ? 'grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:border-brand hover:text-white'
    : 'grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-line hover:text-white'
  return (
    <div className="flex items-center gap-2.5">
      {withGithub && <a className={cls} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>}
      <a className={cls} href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
      <a className={cls} href={profile.email} aria-label="Email"><MailIcon /></a>
    </div>
  )
}
