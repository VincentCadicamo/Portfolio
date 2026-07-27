import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Navbar() {
  const { pathname } = useLocation()
  const linkClass = (to: string) =>
    `font-mono text-sm transition hover:text-accent ${pathname === to ? 'text-accent' : 'text-muted'}`

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-base/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="font-mono font-bold text-soft">
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase()}
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>home</Link>
          <Link to="/projects" className={linkClass('/projects')}>projects</Link>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted transition hover:text-accent"
          >
            github
          </a>
        </div>
      </nav>
    </header>
  )
}
