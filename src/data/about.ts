export interface BackgroundRow {
  label: string
  title: string
  meta: string
}

export interface Principle {
  title: string
  text: string
}

export const aboutStatement = 'From Ukraine to Toronto, through graphic design and coffee.'

export const aboutIntro = [
  'I moved to Toronto three years ago. I’ve worked as a graphic designer for over four years, and I also work as a barista. Now I’m moving into UX/UI, because I like making things that people can actually use.',
  'I started in graphic design, so I care about how things look. I moved into UX/UI so I could also care about how things work, and test them with real people.',
]

export const background: BackgroundRow[] = [
  {
    label: 'Now',
    title: 'Contract graphic designer',
    meta: 'MediaCorp Canada · since Sept 2024',
  },
  { label: 'Freelance', title: 'Brand identity', meta: 'Logos and brand systems' },
  { label: 'Diploma', title: 'Interactive Media Design', meta: 'Algonquin College' },
  { label: 'Certificate', title: 'Google UX Design', meta: 'Professional Certificate' },
  {
    label: 'Certificate',
    title: 'Digital Product Management',
    meta: 'Modern Fundamentals · University of Virginia',
  },
  { label: 'Also', title: 'Barista + technical mentor', meta: 'Specialty coffee' },
]

export const principles: Principle[] = [
  {
    title: 'Start with the problem.',
    text: 'I write down who it’s for and what goes wrong today, before I draw anything.',
  },
  {
    title: 'Test with real people.',
    text: 'I put my designs in front of people and change them based on what I see.',
  },
]

export const tools = ['Figma', 'FigJam', 'Maze', 'Vue', 'Tailwind', 'TypeScript']
