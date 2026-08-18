# WEBSITE-SCOPE.md

## Restaurant / site name

Franco's Yard

## Brand colour (HSL) and vibe

`5 75% 48%` — Franco's red, used on a cream/bone background (suggest `40 45% 96%` as the base). Retro-casual neighbourhood café: warm, sunny, a little playful. The look follows the printed menus — cream paper, red wordmark, clean type, lots of whitespace. The logo file (`Photos/Logo.jpeg`) is a black wordmark on white; render/recolour it in the Franco's red for the site (ideally recreate as SVG).

## What's this restaurant?

A small, much-loved brunch café in Westbourne, Bournemouth (4.8/5 on Tripadvisor), serving seasonal brunch — sourdough, Fluffetts Farm eggs, Isle of Wight tomatoes, Dorset honey — plus great coffee and natural wine. Aimed at locals and weekend brunchers; seats are limited, so booking matters.

## Pages and sections

One long homepage with a sticky nav linking to sections, plus one extra route: **/ounce** (see "Sister venue" below). The nav includes an "Ounce Coffee" tab on the far right, visually slightly set apart, linking to /ounce.

- **Hero** — logo/name, strong photo, tagline, three actions: Book a table, View menu, Find us. Include the hours (Thu–Sun, 9am–3pm) near the top — it's the #1 thing diners check.
- **Menu** — built-in web menu (see below)
- **About** — short story: neighbourhood café, seasonal local produce, named suppliers. Mention Pasta Nights every Friday and occasional pop-ups here (one or two lines + "follow us on Instagram for dates" — no events calendar in v1). Mention takeaway is available (walk-in only, no delivery apps).
- **Gallery** — 6–8 best photos: shopfront with awning, interior/counter, dishes
- **Hours & location** — hours, address, embedded map, directions link
- **Contact / book** — embedded booking widget, phone, email, Instagram
- **Sister-venue teaser** — small block near the footer: "Just around the corner: Ounce Coffee" with a link to /ounce

## Sister venue — Ounce Coffee (/ounce page)

Ounce is Franco's Yard's sister business: an independent specialty coffee shop under the same ownership, a one-minute walk away. It gets its own page at **/ounce** that looks and feels like its own site:

- **Design:** completely separate theme from Franco's — the Ounce vibe is strictly **black and white**. No colour anywhere on this page: black/near-black background, white type, greyscale only (photos may keep their natural tones, but UI, buttons, dividers and accents are pure monochrome). Driven by the `ounce.` brand assets in `Ounce/Photos/` — the logo (`Ounce/Photos/Logo.jpeg`) is a white lowercase serif wordmark "ounce." on black. Generous whitespace, understated. "Shoreditch minimal", not cream-and-red. The shared element is the nav, which lets visitors hop between the two venues (on /ounce the nav shows a "Franco's Yard" link back).
- **Sections on /ounce:** hero (ounce. wordmark over one of the moody coffee photos, one strong line about specialty coffee), short about paragraph (expertly sourced beans, precision brewing, takeaway only, sister venue to Franco's Yard around the corner), a simple coffee menu, hours & location with map, Instagram link (@ouncecoffeeco).
- **Details:** 29A Seamoor Rd, Westbourne, Bournemouth BH4 9AA (confirmed — embed map + directions link). Takeaway only — no seating, no bookings. 5.0/5 on Tripadvisor.
- **Hours:** per their own "brewing hours" graphic (`Ounce/Photos/Brewing-Times.PNG`): Mon–Fri 7am–3pm, Sat–Sun 8am–3pm. NOTE: that graphic is from July 2022 and Tripadvisor currently says daily 7–3 — confirm with the owner before launch; build with the graphic's hours as default.
- **Menu:** Ounce serves coffee and açai bowls only — no food menu. Build the simple menu below (PLACEHOLDER prices, mark clearly in code; owner to confirm):

  **Coffee**
  - Espresso — £3
  - Cortado — £3.40
  - Flat white — £3.80
  - Latte — £4
  - Cappuccino — £4
  - Batch filter — £3.20
  - Iced latte — £4.50
  - Alt milks (oat / coconut) — free

  **Açai bowls** *(Monday–Thursday)*
  - Açai bowl — granola, banana, blueberries, goji berries, coconut flakes, chia — £8.50
- **Photos:** `Ounce/Photos/` — Coffee1–4.jpeg are hi-res, moody, professional shots (espresso pour, latte art). Use them for the hero and page imagery. Acai1/Acai2 are Instagram screenshots — crop the food image out if used, or skip.
- **Note:** ouncecoffee.com may be an existing Ounce website (unreachable at scoping time — check if live). If live and owned by them, consider pointing that domain at /ounce later; not a v1 concern.
- **SEO:** /ounce gets its own title/meta ("specialty coffee Westbourne", "coffee shop Bournemouth").

## Menu

- Structure: Brunch / Hot drinks / Iced drinks / Juices & soft / Alcohol
- Format: web menu, built into the page
- Change frequency: seasonal-ish (blackboard specials in-store). v1 is a static "most common dishes" menu, updated by code edit. No CMS/backend.

Note: prices below are taken from the most recent menu photos; confirm with the owner before launch. Menus state a 10% service charge is added to the bill — include this note under the menu.

### Brunch

- **House-made banana bread** (V) — toasted, with espresso butter — £6
- **Granola & yoghurt** (V) — seasonal fruit compote, peanut butter, chia seeds, coconut flakes, Dorset honey — £9.50
- **Avocado on sourdough** (V/VE) — smashed avocado with lime, figs, chilli jam, pomegranate molasses, almond dukkah — £12.50
  - Extras: halloumi £3.50 · egg £3 · bacon £3.50 · salmon £4
- **Eggs your way** — 2 Fluffetts Farm eggs on sourdough, poached/scrambled/fried — £8.50
- **Franco's Benedict** — steak £16.50 · bacon £14.50 · salmon £16 — poached eggs, house-made hollandaise, toasted muffin, Parmesan
- **Isle of Wight tomatoes** — with evo, sage, 2 poached eggs — £14
- **Shakshouka with stracciatella** — poached eggs in rich spiced tomato sauce, lamb harissa — £14
- **Turkish eggs** — 2 poached eggs, mint yoghurt base, lamb harissa, almond dukkah, parsley, focaccia — £14
- **Basque burnt cheesecake** — £6

### Hot drinks

Flat white £4 · Latte £4 · Cappuccino £4 · Chai £4 · Matcha £4 · Espresso £3.20 · Americano £3.50 · Tea (breakfast, green, chamomile, peppermint) £3.80
Extras: syrup 50p · extra shot £1 · alt milks (oat/coconut) free

### Iced drinks

Iced latte £4.50 · Iced black £4.50 · Iced matcha £4.50

### Juices & soft

Cold-pressed juices (Daily Dose): orange · apple, carrot & ginger · strawberry & fresh basil — £4.95
Sparkling: blood orange · lime · passion fruit — £4.50

### Alcohol

Natural organic wine — £8 glass / £39 bottle · Prosecco £7 · Craft beer £6 (ask staff)

## Opening hours and location

- Hours: Thursday–Sunday, 9am–3pm (kitchen until 2:30pm). Closed Monday–Wednesday. (Tripadvisor says Wed–Sun — confirmed with client as Thu–Sun, per Instagram.)
- Address: 2 Alum Chine Road, Westbourne, Bournemouth BH4 8DX
- Phone: +44 1202 768182
- Map: yes — embedded, with directions link

## Reservations

- Approach: third-party, embedded on the page
- Details: ResDiary — they already take bookings via a ResDiary widget (link in their Instagram bio: booking.resdiary.com/widget/Standard/F…). Embed the widget in the Contact/Book section and use it as the hero "Book a table" target. Get the full widget URL from the Instagram bio link. Also note: "DM for large bookings & private hire" — include email/Instagram for group enquiries.

## Online ordering and delivery

None. Walk-in takeaway only (coffee, açai bowls) — mention it in the About section, no links needed.

## Content source

- Menu: from menu photos in `Photos/` (Menu.PNG, Menu 2–5) — transcribed above; owner to confirm current prices
- Photos: `Photos/` folder — mostly small web-res images. Use the best for v1 (shopfront `images-6.jpeg`, interior `images-7.jpeg`, dishes). Flag: hi-res photography from the owner (or their Instagram originals) would noticeably lift the site — post-v1 improvement.
- Logo: have — `Photos/Logo.jpeg` (black on white; recolour to Franco's red, ideally trace to SVG)
- Copy: need — write from research (Instagram + reviews); keep short and warm
- Ounce assets: have — logo and 4 hi-res photos in `Ounce/Photos/`. Menu is a simple placeholder (coffee + açai only) written into this scope; prices and hours need owner confirmation

## Language

English only

## Domain, Google, and SEO

- Domain: unknown — likely needs purchasing (suggest francosyard.co.uk). Confirm with owner.
- Google Business Profile: needs checking — ensure it exists, is claimed, and links to the new site. (Their Tripadvisor listing is also unclaimed — worth telling the owner.)
- Local search terms: "brunch Westbourne", "breakfast Bournemouth", "brunch Bournemouth", "café Alum Chine"

## Anything else?

- Instagram (@francosyard, 7.1k followers) is their main channel — link it prominently; no feed embed in v1.
- Pasta Nights every Friday + occasional pop-ups: one-line mention only in v1 (no events system).
- 10% service charge and "let us know of any allergies" notes appear on their menus — reproduce under the web menu.
- No backend needed: static site, ResDiary embed handles bookings.
