import { MENU } from '../data/menu'

function Tag({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-block rounded bg-brand/10 px-1.5 py-0.5 align-middle text-[11px] font-bold tracking-wide text-brand">
      {label}
    </span>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="bg-cream-dim/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl text-brand sm:text-4xl">The menu</h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Seasonal and local where we can get it — Fluffetts Farm eggs, Isle of
          Wight tomatoes, Dorset honey. Blackboard specials change with the
          seasons, so there&rsquo;s always something new in-store.
        </p>

        <div className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-2">
          <div>
            {MENU.filter((s) => s.id === 'brunch').map((section) => (
              <div key={section.id}>
                <h3 className="border-b-2 border-brand pb-2 font-display text-xl text-ink">
                  {section.title}
                </h3>
                <ul className="mt-5 space-y-5">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-semibold text-ink">
                          {item.name}
                          {item.tags?.map((t) => <Tag key={t} label={t} />)}
                        </span>
                        <span className="shrink-0 font-semibold text-brand">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-sm text-ink-soft">{item.description}</p>
                      )}
                      {item.extras && (
                        <p className="mt-1 text-sm italic text-ink-soft/80">{item.extras}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {MENU.filter((s) => s.id !== 'brunch').map((section) => (
              <div key={section.id}>
                <h3 className="border-b-2 border-brand pb-2 font-display text-xl text-ink">
                  {section.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-semibold text-ink">
                          {item.name}
                          {item.tags?.map((t) => <Tag key={t} label={t} />)}
                        </span>
                        <span className="shrink-0 font-semibold text-brand">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-sm text-ink-soft">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
                {section.footnote && (
                  <p className="mt-3 text-sm italic text-ink-soft/80">{section.footnote}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
