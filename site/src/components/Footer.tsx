import { Link } from 'react-router-dom'
import { SITE } from '../config'
import Logo from './Logo'
import OunceMark from './OunceMark'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#top" className="text-2xl text-brand">
            <Logo />
          </a>
          <p className="mt-5 text-sm text-ink-soft">
            Seasonal brunch, proper coffee, &amp; good vibes served in a little
            neighbourhood café in Westbourne.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-ink">Hours</h3>
          <p className="mt-3 text-ink-soft">
            {SITE.hoursShort}
            <br />
            {SITE.hoursNote}
          </p>
          <h3 className="mt-6 font-display text-ink">Find us</h3>
          <p className="mt-3 text-ink-soft">{SITE.address}</p>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-ink">Contact</h3>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>
              <a href={SITE.phoneHref} className="hover:text-brand">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-brand">
                Instagram {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-ink">Also from us</h3>
          <Link
            to="/ounce"
            aria-label="Ounce Coffee — our sister coffee shop"
            className="mt-3 inline-block transition-opacity hover:opacity-75"
          >
            <OunceMark className="text-base" />
          </Link>
          <p className="mt-2 text-ink-soft">
            Our specialty coffee shop, a minute&rsquo;s walk away
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-ink-soft/70">
        © {new Date().getFullYear()} Franco&rsquo;s Yard · 2 Alum Chine Road, Westbourne
      </p>
    </footer>
  )
}
