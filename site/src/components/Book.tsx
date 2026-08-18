import { SITE } from '../config'

export default function Book() {
  return (
    <section id="book" className="bg-cream-dim/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl text-brand sm:text-4xl">Book a table</h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          We&rsquo;re a small spot and weekends fill up fast — booking ahead is
          the safest way to get a seat in the yard.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {SITE.resdiaryWidgetUrl ? (
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-lg">
              <iframe
                title="Book a table at Franco's Yard"
                src={SITE.resdiaryWidgetUrl}
                className="h-[40rem] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex flex-col items-start justify-center rounded-2xl border border-ink/10 bg-cream p-8 shadow-lg sm:p-10">
              <h3 className="font-display text-xl text-ink">Reserve online</h3>
              <p className="mt-3 text-ink-soft">
                Bookings are handled through ResDiary — pick a date and time and
                you&rsquo;re all set.
              </p>
              <a
                href={SITE.bookingFallbackUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-full bg-brand px-7 py-3 font-semibold text-cream transition-colors hover:bg-brand-deep"
              >
                Book online
              </a>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg text-ink">Groups & private hire</h3>
              <p className="mt-2 text-ink-soft">
                For large bookings, Pasta Night tables or private hire, drop us
                a DM on Instagram or send an email.
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Instagram {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
