import { OUNCE } from '../../config'

export default function OunceHero() {
  return (
    <section id="top" className="relative flex min-h-[88svh] items-center justify-center overflow-hidden">
      <img
        src="/photos/ounce/sunlit-latte.jpeg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-onyx/70" />

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        {/* White-on-black wordmark JPEG composites cleanly on the dark overlay */}
        <img
          src="/photos/ounce/logo.jpeg"
          alt="ounce."
          width={795}
          height={212}
          className="mx-auto w-64 mix-blend-screen sm:w-80"
        />
        <p className="mt-6 text-lg text-white/85 sm:text-xl">
          {OUNCE.tagline}. Takeaway only, in the heart of Westbourne.
        </p>
        <div className="mt-7 inline-block">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-white/55">
            Brewing hours
          </p>
          <div className="mt-2.5 space-y-1 text-sm text-white/90">
            <div className="flex justify-between gap-10">
              <span className="text-white/60">Mon – Fri</span>
              <span>7am – 3pm</span>
            </div>
            <div className="flex justify-between gap-10">
              <span className="text-white/60">Sat – Sun</span>
              <span>8am – 3pm</span>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#menu"
            className="rounded-full bg-white px-6 py-3 font-semibold text-onyx transition-transform duration-200 hover:scale-105"
          >
            View menu
          </a>
          <a
            href="#find-us"
            className="rounded-full border-2 border-white/80 px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Find us
          </a>
        </div>
      </div>
    </section>
  )
}
