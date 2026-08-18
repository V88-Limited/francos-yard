import { Link } from 'react-router-dom'
import { OUNCE } from '../../config'

export default function OunceAbout() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <img
          src="/photos/ounce/coffee-pour.jpeg"
          alt="Espresso pouring from the machine at Ounce Coffee"
          className="w-full rounded-2xl object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            Small shop, serious coffee
          </h2>
          <div className="mt-6 space-y-4 text-smoke">
            <p>
              Ounce is an independent specialty coffee shop on Seamoor Road —
              expertly sourced beans, precision brewing, and not much else in
              the way. Takeaway only: grab a cup, say hi, and be on your way.
            </p>
            <p>
              Rated 5.0 on Tripadvisor, and proudly the sister venue to{' '}
              <Link to="/" className="font-semibold text-white underline underline-offset-4 hover:text-smoke">
                Franco&rsquo;s Yard
              </Link>
              , our brunch café a one-minute walk around the corner. Coffee
              here, brunch there — the perfect Westbourne morning.
            </p>
            <p>
              <a
                href={OUNCE.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-smoke"
              >
                Follow {OUNCE.instagramHandle}
              </a>{' '}
              for what&rsquo;s brewing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
