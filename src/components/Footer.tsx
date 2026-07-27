import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 font-mono text-xs text-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-accent">github</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">linkedin</a>
          <a href={profile.links.email} className="hover:text-accent">email</a>
        </div>
      </div>
    </footer>
  )
}
