import { OUNCE } from '../../config'

const HOURS: Array<{ days: string; times: string }> = [
  { days: 'Monday – Friday', times: '7am – 3pm' },
  { days: 'Saturday – Sunday', times: '8am – 3pm' },
]

export default function OunceFindUs() {
  return (
    <section id="find-us" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">Brewing hours & location</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="font-serif text-xl text-white">Brewing hours</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {HOURS.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between py-3">
                  <span className="font-medium text-white">{h.days}</span>
                  <span className="text-smoke">{h.times}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-smoke/80">
              Takeaway only — no seating, no bookings. Just good coffee.
            </p>

            <h3 className="mt-10 font-serif text-xl text-white">Address</h3>
            <p className="mt-3 text-smoke">{OUNCE.address}</p>
            <a
              href={OUNCE.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border-2 border-white/80 px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-105"
            >
              Get directions
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {/* NOTE: no CSS filter here — a grayscale filter on the
                cross-origin iframe stalled Chromium's compositor */}
            <iframe
              title="Map — Ounce Coffee, 29A Seamoor Road, Westbourne, Bournemouth"
              src={OUNCE.mapEmbedUrl}
              className="h-80 w-full lg:h-full lg:min-h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
