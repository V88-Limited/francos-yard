import { useEffect, useRef, useState } from 'react'

// Gallery pool — the gal* photos from the owner. Add new ones here (drop the
// file in public/photos/gallery/ first); the grid still shows 8 at a time and
// shuffles through the whole pool.
const POOL = [
  { src: '/photos/gallery/gal1.jpeg', alt: 'Full brunch plate — fried egg, sausage, bacon, beans and toasted sourdough' },
  { src: '/photos/gallery/gal2.jpeg', alt: "Franco's Benedict with hollandaise on toasted muffins" },
  { src: '/photos/gallery/gal4.jpeg', alt: 'Isle of Wight tomatoes with micro herbs' },
  { src: '/photos/gallery/gal6.jpeg', alt: 'Avocado on sourdough with figs, in the morning sun' },
  { src: '/photos/gallery/gal7.jpeg', alt: 'Poached eggs with greens and almonds on toast' },
  { src: '/photos/gallery/gal8.jpeg', alt: 'Brunch platter with cured salmon, burrata and flatbread' },
  { src: '/photos/gallery/gal9.jpeg', alt: 'Shaved salad with croutons and Parmesan' },
  { src: '/photos/gallery/gal10.jpeg', alt: 'Cured salmon on toast with a poached egg and lime' },
]

const VISIBLE = 8
const SHUFFLE_MS = 4000

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Photo = (typeof POOL)[number]

// Crossfades to the new image when `photo` changes.
function Tile({ photo }: { photo: Photo }) {
  const [prev, setPrev] = useState(photo)
  useEffect(() => {
    const t = setTimeout(() => setPrev(photo), 900)
    return () => clearTimeout(t)
  }, [photo])
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-sm">
      {prev.src !== photo.src && (
        <img src={prev.src} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      )}
      <img
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="animate-gal-fade absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

export default function Gallery() {
  const [tiles, setTiles] = useState(() => shuffle(POOL).slice(0, VISIBLE))
  const tilesRef = useRef(tiles)
  tilesRef.current = tiles

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setTiles((current) => {
        const next = [...current]
        const i = Math.floor(Math.random() * next.length)
        const hidden = POOL.filter((p) => !current.some((c) => c.src === p.src))
        if (hidden.length) {
          next[i] = hidden[Math.floor(Math.random() * hidden.length)]
        } else {
          // Whole pool is on screen — swap two tiles so it still feels alive.
          const j = (i + 1 + Math.floor(Math.random() * (next.length - 1))) % next.length
          ;[next[i], next[j]] = [next[j], next[i]]
        }
        return next
      })
    }, SHUFFLE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="gallery" className="bg-cream-dim/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl text-brand sm:text-4xl">From the yard</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((photo, i) => (
            <Tile key={i} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  )
}
