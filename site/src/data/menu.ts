// Static v1 menu, transcribed from the printed menus (Photos/Menu*.png).
// Prices to be confirmed by the owner before launch — update here.

export type MenuItem = {
  name: string
  description?: string
  price: string
  tags?: string[]
  extras?: string
}

export type MenuSection = {
  id: string
  title: string
  items: MenuItem[]
  footnote?: string
}

export const MENU: MenuSection[] = [
  {
    id: 'brunch',
    title: 'Brunch',
    items: [
      {
        name: 'House-made banana bread',
        description: 'Toasted, with espresso butter',
        price: '£6',
        tags: ['V'],
      },
      {
        name: 'Granola & yoghurt',
        description:
          'Seasonal fruit compote, peanut butter, chia seeds, coconut flakes, Dorset honey',
        price: '£9.50',
        tags: ['V'],
      },
      {
        name: 'Avocado on sourdough',
        description:
          'Smashed avocado with lime, figs, chilli jam, pomegranate molasses, almond dukkah',
        price: '£12.50',
        tags: ['V', 'VE'],
        extras: 'Add halloumi £3.50 · egg £3 · bacon £3.50 · salmon £4',
      },
      {
        name: 'Eggs your way',
        description: '2 Fluffetts Farm eggs on sourdough — poached, scrambled or fried',
        price: '£8.50',
      },
      {
        name: "Franco's Benedict",
        description: 'Poached eggs, house-made hollandaise, toasted muffin, Parmesan',
        price: 'steak £16.50 · bacon £14.50 · salmon £16',
      },
      {
        name: 'Isle of Wight tomatoes',
        description: 'With evo, sage and 2 poached eggs',
        price: '£14',
      },
      {
        name: 'Shakshouka with stracciatella',
        description: 'Poached eggs in rich spiced tomato sauce, lamb harissa',
        price: '£14',
      },
      {
        name: 'Turkish eggs',
        description:
          '2 poached eggs, mint yoghurt base, lamb harissa, almond dukkah, parsley, focaccia',
        price: '£14',
      },
      {
        name: 'Basque burnt cheesecake',
        price: '£6',
      },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot drinks',
    items: [
      { name: 'Flat white', price: '£4' },
      { name: 'Latte', price: '£4' },
      { name: 'Cappuccino', price: '£4' },
      { name: 'Chai', price: '£4' },
      { name: 'Matcha', price: '£4' },
      { name: 'Espresso', price: '£3.20' },
      { name: 'Americano', price: '£3.50' },
      {
        name: 'Tea',
        description: 'Breakfast, green, chamomile or peppermint',
        price: '£3.80',
      },
    ],
    footnote: 'Syrup 50p · extra shot £1 · oat or coconut milk free',
  },
  {
    id: 'iced-drinks',
    title: 'Iced drinks',
    items: [
      { name: 'Iced latte', price: '£4.50' },
      { name: 'Iced black', price: '£4.50' },
      { name: 'Iced matcha', price: '£4.50' },
    ],
  },
  {
    id: 'juices-soft',
    title: 'Juices & soft',
    items: [
      {
        name: 'Cold-pressed juices',
        description:
          'Daily Dose — orange · apple, carrot & ginger · strawberry & fresh basil',
        price: '£4.95',
      },
      {
        name: 'Sparkling',
        description: 'Blood orange · lime · passion fruit',
        price: '£4.50',
      },
    ],
  },
  {
    id: 'alcohol',
    title: 'Alcohol',
    items: [
      {
        name: 'Natural organic wine',
        price: '£8 glass · £39 bottle',
      },
      { name: 'Prosecco', price: '£7' },
      { name: 'Craft beer', description: 'Ask staff for what’s in the fridge', price: '£6' },
    ],
  },
]
