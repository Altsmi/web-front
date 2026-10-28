export interface DesignImage {
  src: string
  alt: string
  caption?: string
}

export interface DesignProject {
  slug: string
  title: string
  year?: string
  tools: string[]
  description?: string
  fit?: 'cover' | 'contain'
  images: DesignImage[]
}

export const designProjects: DesignProject[] = [
  {
    slug: 'farm-boy-poster',
    title: 'Farm Boy Poster Design',
    year: '2026',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A poster for Farm Boy',
    images: [
      { src: '/design_img/farmboy/Farmboy_Main.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/farmboy/Farmboy_3.jpg', alt: 'Posters' },
      { src: '/design_img/farmboy/Farmboy_1.jpg', alt: 'Poster' },
      { src: '/design_img/farmboy/Farmboy_2.jpg', alt: 'Poster' },
    ],
  },
  {
    slug: 'flower-poster',
    title: 'The Essence of Growth poster series',
    year: '2026',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A concept poster series with halftone flower photos.',
    images: [
      { src: '/design_img/flower/flower_1.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/flower/flower_2.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_3.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_4.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_5.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_6.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_7.jpg', alt: 'Poster' },
      { src: '/design_img/flower/flower_8.jpg', alt: 'Posters' },
    ],
  },
  {
    slug: 'swift_branding',
    title: 'Swift Venture Branding.',
    year: '2025',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    description: 'A brand identity for a delivery company.',
    images: [
      {
        src: '/design_img/swift/swift_1.jpg',
        alt: 'Describe image 1',
        caption: '01 · Logo construction and app icon',
      },
      {
        src: '/design_img/swift/swift_2.jpg',
        alt: 'Describe image 2',
        caption: '02 · Brand system: logo, colour and type',
      },
      {
        src: '/design_img/swift/swift_3.jpg',
        alt: 'Describe image 3',
        caption: '03 · Brand in use: signage, outdoor and app',
      },
      {
        src: '/design_img/swift/swift_4.jpg',
        alt: 'Describe image 4',
        caption: '04 · Outdoor billboard',
      },
      {
        src: '/design_img/swift/swift_5.jpg',
        alt: 'Describe image 5',
        caption: '05 · Merchandise: cap',
      },
      { src: '/design_img/swift/swift_6.jpg', alt: 'Describe image 6', caption: '06 · Packaging' },
    ],
  },
  {
    slug: 'arcane-branding',
    title: 'Arcane bookstore brand identity.',
    year: '2024',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    description: 'A brand identity for an online and offline bookstore.',
    images: [
      {
        src: '/design_img/arcane/arcane_5.jpg',
        alt: 'Clear zip bag of white character stickers with a red Arcane label on black, next to a character bookmark sticking out of a red hardcover book.',
        caption: '01 · Stickers and bookmark',
      },
      {
        src: '/design_img/arcane/arcane_1.jpg',
        alt: 'Open book with a red ribbon on a dark background, the red Arcane wordmark above it, and the lines “A journey through mystical lore” and “Online & offline bookstore”.',
        caption: '02 · Wordmark and positioning',
      },
      {
        src: '/design_img/arcane/arcane_2.jpg',
        alt: 'Black lanyard and library pass card with a character illustration and barcode, beside the written task and solution for the Arcane bookstore.',
        caption: '03 · Brief: task and solution',
      },
      {
        src: '/design_img/arcane/arcane_3.jpg',
        alt: 'Colour palette of Bone White #F9F6EE, Black Oil #0C0C0C and Punch Red #D62828, with photos of an ink bottle and a stack of books.',
        caption: '04 · Colour palette',
      },
      {
        src: '/design_img/arcane/arcane_4.jpg',
        alt: 'Three canvas tote bags, each with a different character illustration and the red Arcane wordmark.',
        caption: '05 · Character system: tote bags',
      },
      {
        src: '/design_img/arcane/arcane_7.jpg',
        alt: 'Two Arcane business cards with character illustrations and contact details, beside a black-and-white photo of a person facing a tall bookshelf.',
        caption: '06 · Business cards',
      },
      {
        src: '/design_img/arcane/arcane_6.jpg',
        alt: 'Two social media post mockups: a hand taking a book from a shelf inside a white circle, and a post reading “Symbol of guiding wisdom” above a shelf of books.',
        caption: '07 · Social media',
      },
      {
        src: '/design_img/arcane/arcane_8.jpg',
        alt: 'Rooftop billboard reading “Ancient wisdom meets modern design.” with the Arcane wordmark, arcane.com, Toronto, ON and a round photo of a library.',
        caption: '08 · Outdoor billboard',
      },
    ],
  },

  {
    slug: 'climate-poster',
    title: 'Protect our future poster series',
    year: '2026',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A poster series for climate awareness',
    images: [
      { src: '/design_img/climate/climate_1.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/climate/climate_2.jpg', alt: 'Poster' },
      { src: '/design_img/climate/climate_3.jpg', alt: 'Poster' },
      { src: '/design_img/climate/climate_4.jpg', alt: 'Poster' },
      { src: '/design_img/climate/climate_5.jpg', alt: 'Poster' },
    ],
  },
  {
    slug: 'wild-poster',
    title: 'Wild Whispers magazine covers',
    year: '2024',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A concept series of nature magazine covers.',
    images: [
      { src: '/design_img/wild/wild_1.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/wild/wild_2.jpg', alt: 'Poster' },
      { src: '/design_img/wild/wild_3.jpg', alt: 'Poster' },
      { src: '/design_img/wild/wild_4.jpg', alt: 'Poster' },
      { src: '/design_img/wild/wild_5.jpg', alt: 'Poster' },
    ],
  },
  {
    slug: 'album-poster',
    title: 'Sacred Pulse album cover',
    year: '2025',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A concept vinyl album cover with a red line-drawn heart.',
    images: [
      { src: '/design_img/album/album_1.jpg', alt: 'Sleeve and vinyl' },
      { src: '/design_img/album/album_2.jpg', alt: 'Record label' },
      { src: '/design_img/album/album_3.jpg', alt: 'Cover artwork' },
    ],
  },
  {
    slug: 'solaris-poster',
    title: 'Solaris poster series',
    year: '2025',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    description: 'A concept poster series on space.',
    images: [
      { src: '/design_img/solaris/solaris_1.jpg', alt: 'Series overview' },
      { src: '/design_img/solaris/solaris_2.jpg', alt: 'Symbols on a grid' },
      { src: '/design_img/solaris/solaris_3.jpg', alt: 'Black hole' },
      { src: '/design_img/solaris/solaris_4.jpg', alt: 'Milky Way' },
      { src: '/design_img/solaris/solaris_5.jpg', alt: 'Sun, Earth and Moon' },
      { src: '/design_img/solaris/solaris_6.jpg', alt: 'Street display' },
      { src: '/design_img/solaris/solaris_7.jpg', alt: 'Bus shelter' },
    ],
  },
  {
    slug: 'edit-poster',
    title: 'Monochrome exhibition poster',
    year: '2024',
    tools: ['InDesign', 'Photoshop'],
    description: 'A concept poster for a gallery exhibition.',
    images: [
      { src: '/design_img/edit/editorial_1.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/edit/editorial_2.jpg', alt: 'Poster' },
      { src: '/design_img/edit/editorial_3.jpg', alt: 'Poster' },
      { src: '/design_img/edit/editorial_4.jpg', alt: 'Poster Mockup' },
    ],
  },
  {
    slug: 'climate-poster',
    title: 'Clothing Fest poster series',
    year: '2024',
    tools: ['Illustrator', 'Photoshop'],
    description: 'A concept poster series for a fashion event.',
    images: [
      { src: '/design_img/clothing/clothing_1.jpg', alt: 'Poster Mockup' },
      { src: '/design_img/clothing/clothing_2.jpg', alt: 'Poster' },
      { src: '/design_img/clothing/clothing_3.jpg', alt: 'Poster' },
      { src: '/design_img/clothing/clothing_4.jpg', alt: 'Poster' },
    ],
  },
]
