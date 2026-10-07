import { profile } from '../data.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-gradient-to-b from-[#08112b] to-ink px-5 pb-6 pt-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="mt-2 max-w-md text-muted">Have a project in mind or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.</p>
          </div>
          <div>
            <div className="mb-3 text-[11px] tracking-[0.25em] text-muted md:text-right">FOLLOW ME</div>
            <SocialLinks boxed withGithub={false} />
          </div>
        </div>

        {/* Contact form */}
        <form
          action="https://formspree.io/f/xaeoqqoza"
          method="POST"
          className="mt-10 grid max-w-xl gap-3"
        >
          <input
            name="name"
            placeholder="Your name"
            required
            className="rounded-lg border border-line bg-panel p-3 text-sm outline-none focus:border-brand"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="rounded-lg border border-line bg-panel p-3 text-sm outline-none focus:border-brand"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            required
            className="rounded-lg border border-line bg-panel p-3 text-sm outline-none focus:border-brand"
          />
          <button className="rounded-full bg-brand py-3 font-semibold transition hover:bg-[#4a7fff]">
            Send message
          </button>
        </form>

        <div className="mt-12 flex flex-col justify-between gap-2 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed &amp; Built with React &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}