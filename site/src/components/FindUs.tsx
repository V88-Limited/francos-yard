import { SITE } from '../config'

const HOURS: Array<{ days: string; times: string; closed?: boolean }> = [
  { days: 'Monday – Wednesday', times: 'Closed', closed: true },
  { days: 'Thursday – Sunday', times: '9am – 3pm' },
]

export default function FindUs() {
  return (
    <section id="find-us" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl text-brand sm:text-4xl">Hours & location</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="font-display text-lg text-ink">Opening hours</h3>
            <ul className="mt-4 divide-y divide-ink/10">
              {HOURS.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between py-3">
                  <span className="font-medium text-ink">{h.days}</span>
                  <span className={h.closed ? 'text-ink-soft/70' : 'font-semibold text-brand'}>
                    {h.times}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-ink-soft">Kitchen closes at 2:30pm.</p>

            <h3 className="mt-10 font-display text-lg text-ink">Address</h3>
            <p className="mt-3 text-ink-soft">{SITE.address}</p>
            <a
              href={SITE.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full border-2 border-brand bg-cream px-6 py-3 font-semibold text-brand shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get directions
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
            <iframe
              title="Map — Franco's Yard, 2 Alum Chine Road, Westbourne, Bournemouth"
              src={SITE.mapEmbedUrl}
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
