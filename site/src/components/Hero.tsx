import { SITE } from '../config'
import Logo from './Logo'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-block rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-sm font-semibold text-brand">
            Open {SITE.hoursShort}
          </p>
          <h1 className="text-brand text-5xl sm:text-6xl lg:text-7xl">
            <Logo />
          </h1>
          <p className="mt-14 max-w-md text-lg text-ink-soft sm:text-xl">
            Seasonal brunch, proper coffee, &amp; good vibes served in a little
            neighbourhood café in Westbourne.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: '#book', label: 'Book a table' },
              { href: '#menu', label: 'View menu' },
              { href: '#find-us', label: 'Find us' },
            ].map((b) => (
              <a
                key={b.href}
                href={b.href}
                className="rounded-full border-2 border-brand px-6 py-3 font-semibold text-brand transition-transform duration-200 hover:scale-105"
              >
                {b.label}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">{SITE.hoursNote}</p>
        </div>

        <div className="relative">
          <img
            src="/photos/shopfront.jpeg"
            alt="Franco's Yard shopfront in Westbourne — cream awning and tables outside in the sun"
            className="w-full rounded-2xl object-cover shadow-xl"
            width={492}
            height={655}
            fetchPriority="high"
          />
          <div className="absolute -bottom-4 -left-4 hidden rotate-[-3deg] rounded-xl bg-brand px-5 py-3 font-script text-2xl text-cream shadow-lg sm:block">
            see you in the yard
          </div>
        </div>
      </div>
    </section>
  )
}
