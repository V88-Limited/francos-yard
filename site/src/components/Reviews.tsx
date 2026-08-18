import { REVIEWS, TRIPADVISOR_URL } from '../data/reviews'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.26 6.85.6-5.2 4.5 1.55 6.7L12 16.5l-6.1 3.56 1.55-6.7-5.2-4.5 6.85-.6L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-brand sm:text-4xl">Kind words</h2>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
          >
            4.8 / 5 on Tripadvisor
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-cream-dim/60 p-6"
            >
              <Stars count={r.stars} />
              <blockquote className="mt-4 flex-1 text-sm text-ink-soft">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-ink">{r.name}</span>
                <span className="text-ink-soft/70"> · {r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
