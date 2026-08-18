import { Link } from 'react-router-dom'

export default function OunceNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-onyx/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-serif text-2xl lowercase text-white" aria-label="Ounce Coffee — top of page">
          ounce.
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <a href="#menu" className="text-sm font-medium text-smoke transition-colors hover:text-white">
            Menu
          </a>
          <a href="#find-us" className="text-sm font-medium text-smoke transition-colors hover:text-white">
            Find us
          </a>
          <Link
            to="/"
            className="border-l border-white/15 pl-5 text-sm font-medium text-smoke transition-colors hover:text-white sm:pl-7"
          >
            Franco&rsquo;s Yard →
          </Link>
        </div>
      </nav>
    </header>
  )
}
