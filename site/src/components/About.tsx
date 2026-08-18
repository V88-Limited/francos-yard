import { SITE } from '../config'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <img
          src="/photos/interior.jpeg"
          alt="Inside Franco's Yard — the open kitchen and coffee counter"
          className="w-full rounded-2xl object-cover shadow-lg"
          width={492}
          height={655}
          loading="lazy"
        />
        <div>
          <h2 className="font-display text-3xl text-brand sm:text-4xl">
            Your local yard
          </h2>
          <div className="mt-5 space-y-4 text-ink-soft">
            <p>
              Franco&rsquo;s Yard is a small, sunny brunch café on Alum Chine
              Road — the kind of place you wander to on a Saturday and stay a
              little longer than planned. Everything is made in-house, from the
              banana bread to the hollandaise.
            </p>
            <p>
              We keep it seasonal and local: Fluffetts Farm eggs, Isle of Wight
              tomatoes, Dorset honey, natural organic wine and coffee made with
              care. Seats are limited, so booking is a good idea — especially
              at the weekend.
            </p>
            <p>
              Every Friday we host <strong className="text-ink">Pasta Night</strong>, and
              pop-ups land now and then —{' '}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand underline-offset-2 hover:underline"
              >
                follow us on Instagram
              </a>{' '}
              for dates.
            </p>
            <p>
              Takeaway coffee and açai bowls are available to walk in and grab —
              no apps, no delivery, just come say hi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
