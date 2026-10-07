import { projects, profile } from '../data.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <div className="space-y-20 lg:space-y-28">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} reverse={i % 2 === 1} />)}
      </div>
      <div className="mx-auto mt-24 max-w-md border-t border-line pt-12 text-center">
        <h4 className="text-xl font-medium sm:text-2xl">Want to see more projects?</h4>
        <p className="mb-5 mt-2 text-sm text-muted">Check out my GitHub repository for open-source creations.</p>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-block rounded-full border border-line bg-[#0c1a4a] px-6 py-2.5 text-sm transition hover:border-brand">Visit My GitHub</a>
      </div>
    </section>
  )
}
