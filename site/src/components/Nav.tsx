import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import OunceMark from './OunceMark'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#find-us', label: 'Find us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-brand text-xl sm:text-2xl" aria-label="Franco's Yard — top of page">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
          >
            Book a table
          </a>
          <Link
            to="/ounce"
            aria-label="Ounce Coffee — our sister coffee shop"
            className="border-l border-ink/15 pl-7 transition-opacity hover:opacity-75"
          >
            <OunceMark className="text-sm" />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-ink/10 bg-cream px-4 pb-4 shadow-lg md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-3 font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brand px-5 py-3 text-center font-semibold text-cream"
          >
            Book a table
          </a>
          <Link
            to="/ounce"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2.5 py-2 text-sm font-medium text-ink-soft"
          >
            Our sister coffee shop: <OunceMark className="text-base" />
          </Link>
        </div>
      )}
    </header>
  )
}
