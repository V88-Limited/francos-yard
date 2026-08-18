import { Link } from 'react-router-dom'
import { OUNCE } from '../../config'

export default function OunceFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <a href="#top" className="font-serif text-2xl lowercase text-white">
            ounce.
          </a>
          <p className="mt-4 text-sm text-smoke">
            Specialty takeaway coffee in Westbourne, Bournemouth.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-serif text-lg text-white">Brewing hours</h3>
          <p className="mt-3 text-smoke">{OUNCE.hoursShort}</p>
          <h3 className="mt-6 font-serif text-lg text-white">Find us</h3>
          <p className="mt-3 text-smoke">{OUNCE.address}</p>
        </div>
        <div className="text-sm">
          <h3 className="font-serif text-lg text-white">Say hello</h3>
          <ul className="mt-3 space-y-2 text-smoke">
            <li>
              <a
                href={OUNCE.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram {OUNCE.instagramHandle}
              </a>
            </li>
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Franco&rsquo;s Yard — our brunch café →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-smoke/60">
        © {new Date().getFullYear()} Ounce Coffee · 29A Seamoor Road, Westbourne
      </p>
    </footer>
  )
}
