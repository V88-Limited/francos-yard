// Ounce Coffee menu — coffee and açai bowls only, no food.
//
// ⚠️ PLACEHOLDER PRICES — every price below is a placeholder from the scope,
// not taken from a real Ounce menu. Owner to confirm all of them (and the
// açai Mon–Thu availability) before launch.

export type OunceItem = {
  name: string
  description?: string
  price: string
}

export type OunceSection = {
  title: string
  note?: string
  items: OunceItem[]
  footnote?: string
  images?: Array<{ src: string; alt: string }>
}

export const OUNCE_MENU: OunceSection[] = [
  {
    title: 'Coffee',
    items: [
      { name: 'Espresso', price: '£3' },
      { name: 'Cortado', price: '£3.40' },
      { name: 'Flat white', price: '£3.80' },
      { name: 'Latte', price: '£4' },
      { name: 'Cappuccino', price: '£4' },
      { name: 'Batch filter', price: '£3.20' },
      { name: 'Iced latte', price: '£4.50' },
    ],
    footnote: 'Alt milks (oat / coconut) free',
  },
  {
    title: 'Açai bowls',
    note: 'Monday – Thursday',
    items: [
      {
        name: 'Açai bowl',
        description:
          'Granola, banana, blueberries, goji berries, coconut flakes, chia',
        price: '£8.50',
      },
    ],
    images: [
      {
        src: '/photos/ounce/acai-bowl.jpeg',
        alt: 'Açai bowl topped with banana, blueberries and goji berries, next to a latte',
      },
      {
        src: '/photos/ounce/acai-bowl-2.jpeg',
        alt: 'Açai bowl from above with chia, coconut and goji berries, beside a heart latte',
      },
    ],
  },
]
