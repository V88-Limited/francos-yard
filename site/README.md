# Franco's Yard — website

One-page marketing site for Franco's Yard, a brunch café in Westbourne,
Bournemouth. Built with Vite + React + TypeScript + Tailwind CSS (v4).
Static site, no backend — bookings are handled by ResDiary.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

Deploy `dist/` to Vercel (framework preset: Vite).

## Where to edit content

- **Menu items & prices** — [src/data/menu.ts](src/data/menu.ts)
- **Hours, phone, email, links, map** — [src/config.ts](src/config.ts)
- **Copy** — the section components in [src/components/](src/components/)
- **Photos** — [public/photos/](public/photos/); referenced by filename in
  `Hero.tsx`, `About.tsx` and `Gallery.tsx`

## Before launch — confirm with the owner

1. **Prices** — transcribed from menu photos (`../Photos/Menu*.png`); confirm
   they're current (`src/data/menu.ts`).
2. **ResDiary widget URL** — take the full `booking.resdiary.com/widget/Standard/…`
   link from the Instagram bio and paste it into `resdiaryWidgetUrl` in
   `src/config.ts` to enable the embedded booking widget. Until then the
   "Book online" button links to their Dish Cult page (ResDiary's consumer
   site), which takes bookings today.
3. **Email address** — `hello@francosyard.co.uk` is a placeholder in
   `src/config.ts`; confirm the real one.
4. **Map pin** — the embed centres on the café but has no marker. For a
   pinned map, open Google Maps → search Franco's Yard → Share → "Embed a
   map", and paste the iframe `src` into `mapEmbedUrl` in `src/config.ts`.
   (The plain `?q=…&output=embed` URL doesn't work — Google's UK cookie-consent
   redirect blocks it inside iframes.)
5. **Domain** — likely needs purchasing (suggest francosyard.co.uk); update
   the `og:image` URL in `index.html` to an absolute URL once live.
6. **Google Business Profile** — check it exists, is claimed, and links to
   the new site. Their Tripadvisor listing is also unclaimed.

## Post-v1 ideas

- Hi-res photography from the owner (current images are small web-res copies;
  the hero/gallery would benefit most).
- Trace the wordmark to a real SVG (currently recreated with web fonts:
  Archivo Black + Yellowtail — see `src/components/Logo.tsx`).
