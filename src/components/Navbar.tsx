import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
import LineSidebar from './LineSidebar'

type NavItem = { label: string; to?: string; href?: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'home', to: '/' },
  { label: 'projects', to: '/projects' },
  { label: 'github', href: profile.links.github },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const activeIndex = NAV_ITEMS.findIndex((i) => i.to === pathname)

  // Close on route change, so picking an item doesn't leave the panel hanging.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape to dismiss, plus a click anywhere outside the header.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const handleItemClick = useCallback(
    (index: number, _label: string, event: React.MouseEvent | React.KeyboardEvent) => {
      const item = NAV_ITEMS[index]

      // Let the browser own cmd/ctrl/shift-clicks so "open in new tab" still
      // works on the real anchors underneath.
      const m = event as React.MouseEvent
      if (m.metaKey || m.ctrlKey || m.shiftKey || m.altKey) return

      event.preventDefault()
      setOpen(false)
      if (item.to) {
        navigate(item.to)
      } else if (item.href) {
        window.open(item.href, '_blank', 'noopener,noreferrer')
      }
    },
    [navigate]
  )

  const menu = (compact: boolean) => (
    <LineSidebar
      className="font-mono"
      items={NAV_ITEMS.map((i) => i.label)}
      itemHrefs={NAV_ITEMS.map((i) => i.to ?? i.href)}
      defaultActive={activeIndex === -1 ? null : activeIndex}
      onItemClick={handleItemClick}
      accentColor="#4ade80"
      textColor="#8b98a9"
      markerColor="#1e2836"
      markerLength={compact ? 28 : 40}
      itemGap={compact ? 14 : 20}
      fontSize={compact ? 0.95 : 1}
      proximityRadius={compact ? 70 : 90}
      maxShift={compact ? 10 : 16}
      smoothing={90}
    />
  )

  return (
    <>
      {/* Persistent side rail from xl up, where the centered max-w-5xl column
          leaves enough gutter for it to sit clear of the content. */}
      <div className="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
        {menu(false)}
      </div>

      <header
        ref={headerRef}
        className="sticky top-0 z-20 border-b border-line bg-base/80 backdrop-blur"
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link to="/" className="font-mono font-bold text-soft">
            <span className="text-accent">~/</span>
            {profile.name.toLowerCase()}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`-mr-2 flex h-10 w-10 items-center justify-center rounded transition-colors xl:hidden ${
              open ? 'text-accent' : 'text-muted hover:text-accent'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <line
                x1="3" y1="6" x2="17" y2="6"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                className="origin-center transition-transform duration-200"
                style={open ? { transform: 'translateY(4px) rotate(45deg)' } : undefined}
              />
              <line
                x1="3" y1="14" x2="17" y2="14"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                className="origin-center transition-transform duration-200"
                style={open ? { transform: 'translateY(-4px) rotate(-45deg)' } : undefined}
              />
            </svg>
          </button>
        </nav>

        {open && (
          <div
            id="nav-menu"
            className="absolute right-6 top-full mt-2 rounded-lg border border-line bg-surface/95 px-5 shadow-xl shadow-black/40 backdrop-blur xl:hidden"
          >
            {menu(true)}
          </div>
        )}
      </header>
    </>
  )
}