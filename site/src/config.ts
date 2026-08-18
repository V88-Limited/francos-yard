// Central place for facts that may change — edit here, not in components.

export const SITE = {
  name: "Franco's Yard",
  tagline: 'Seasonal brunch, proper coffee & natural wine',
  phone: '+44 1202 768182',
  phoneHref: 'tel:+441202768182',
  email: 'hello@francosyard.co.uk', // TODO: confirm with owner before launch
  instagram: 'https://www.instagram.com/francosyard/',
  instagramHandle: '@francosyard',
  address: '2 Alum Chine Road, Westbourne, Bournemouth BH4 8DX',
  hoursShort: 'Thu–Sun · 9am–3pm',
  hoursNote: 'Kitchen until 2:30pm · Closed Mon–Wed',

  // ResDiary widget URL — take the full link from the Instagram bio
  // (booking.resdiary.com/widget/Standard/…) and paste it here to enable
  // the embedded widget. Until then the Book section links to Dish Cult,
  // ResDiary's consumer booking page for Franco's Yard, which works today.
  resdiaryWidgetUrl:
    'https://booking.resdiary.com/widget/Standard/FRANCOSYARD/67107?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3',
  bookingFallbackUrl: 'https://www.dishcult.com/restaurant/francosyard',

  // Embed-API (pb) format — the plain ?q=…&output=embed form is blocked by
  // Google's UK/EU consent redirect inside iframes. Centred on 50.72189,
  // -1.90194 (Franco's Yard). For a pinned marker, replace with the iframe
  // src from Google Maps → Share → Embed a map.
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4!2d-1.9019372!3d50.7218883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFranco%27s%20Yard!5e0!3m2!1sen!2suk!4v1700000000000',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Franco%27s+Yard%2C+2+Alum+Chine+Road%2C+Westbourne%2C+Bournemouth+BH4+8DX',
}

// Sister venue — Ounce Coffee (/ounce). Takeaway only, no bookings.
export const OUNCE = {
  name: 'Ounce Coffee',
  tagline: 'Specialty coffee, brewed with obsession',
  instagram: 'https://www.instagram.com/ouncecoffeeco/',
  instagramHandle: '@ouncecoffeeco',
  address: '29A Seamoor Road, Westbourne, Bournemouth BH4 9AA',
  // Hours from the July 2022 "brewing hours" graphic (Ounce/Photos/
  // Brewing-Times.PNG); Tripadvisor currently says daily 7–3.
  // TODO: confirm with owner before launch.
  hoursShort: 'Mon–Fri 7am–3pm · Sat–Sun 8am–3pm',
  // Same embed-API format as the Franco's map (see note above). Centred on
  // 50.72216, -1.90243 (Ounce Coffee Co).
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4!2d-1.9024311!3d50.7221649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOunce%20Coffee!5e0!3m2!1sen!2suk!4v1700000000000',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Ounce+Coffee%2C+29A+Seamoor+Road%2C+Westbourne%2C+Bournemouth+BH4+9AA',
}
