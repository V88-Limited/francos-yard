// Seeded placeholder reviews — written in the voice of their real Tripadvisor
// feedback (4.8/5), but not verbatim quotes. Swap for real ones (with
// reviewers' first names) before launch.

export type Review = {
  quote: string
  name: string
  source: string
  stars: number
}

export const REVIEWS: Review[] = [
  {
    quote:
      'Best brunch in Bournemouth, hands down. The Turkish eggs are unreal and the flat white was perfect. Tiny place with a lovely buzz, so book ahead!',
    name: 'Sophie',
    source: 'Tripadvisor',
    stars: 5,
  },
  {
    quote:
      'Came for a lazy Saturday brunch and stayed all morning. You can tell everything is made with care. The banana bread with espresso butter is dangerously good.',
    name: 'James',
    source: 'Google',
    stars: 5,
  },
  {
    quote:
      'Friendly staff, great natural wine, and the Benedict was the best I’ve had anywhere. Feels like a proper neighbourhood spot. We’re regulars now.',
    name: 'Amelia',
    source: 'Tripadvisor',
    stars: 5,
  },
  {
    quote:
      'Pasta Night on Friday is such a treat. Fresh pasta in a brunch café you’d walk past if you didn’t know. Now you know. Go.',
    name: 'Dan',
    source: 'Google',
    stars: 5,
  },
]

export const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.uk/Restaurant_Review-g186262-d26518876-Reviews-Franco_s_Yard-Bournemouth_Bournemouth_Christchurch_and_Poole_Dorset_England.html'
