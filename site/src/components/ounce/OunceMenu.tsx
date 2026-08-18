import { OUNCE_MENU } from '../../data/ounceMenu'

export default function OunceMenu() {
  return (
    <section id="menu" className="bg-onyx-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">The menu</h2>
        <p className="mt-3 max-w-xl text-smoke">
          Coffee and açai bowls — that&rsquo;s it, and that&rsquo;s the point.
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {OUNCE_MENU.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline justify-between border-b border-white/20 pb-3">
                <h3 className="font-serif text-2xl text-white">{section.title}</h3>
                {section.note && (
                  <span className="text-sm italic text-smoke">{section.note}</span>
                )}
              </div>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium text-white">{item.name}</span>
                      <span
                        aria-hidden
                        className="flex-1 border-b border-dotted border-white/25"
                      />
                      <span className="text-smoke">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-smoke/80">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
              {section.footnote && (
                <p className="mt-4 text-sm italic text-smoke/80">{section.footnote}</p>
              )}
              {section.images && (
                <div className="mt-6 flex gap-4">
                  {section.images.map((img) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="aspect-square w-44 max-w-[calc(50%-0.5rem)] rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4">
          <img
            src="/photos/ounce/latte-art.jpeg"
            alt="Pouring a latte-art heart at Ounce Coffee"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <img
            src="/photos/ounce/cup-in-hand.jpeg"
            alt="Takeaway flat white in hand"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
