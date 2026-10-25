export interface ProjectSection {
  heading: string
  text: string
  images?: { src: string; alt: string }[]
}

export interface Project {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  image: string
  alt: string
  featured?: boolean
  link?: string // optional: a full URL opens in a new tab instead of the project page
  role: string
  timeline: string
  tools: string[]
  type?: string
  sections: ProjectSection[]
}

export const projectPath = (p: Project) => p.link ?? `/work/ux-ui/${p.slug}`

export const uxProjects: Project[] = [
  {
    slug: 'invoice-app',
    title: 'Invoice app', // replace
    summary: 'One-line summary of the problem and the result.', // replace
    tags: ['Research', 'Wireframing', 'Prototype'], // replace
    year: '2026',
    image: '/project_img/invoice/Presentation_02.jpg',
    alt: 'Landing page of the invoicing app on desktop and phone',
    featured: true,
    role: 'UX / UI designer', // replace
    timeline: '6 weeks', // replace
    tools: ['Figma', 'FigJam'], // replace
    type: 'Web app', // replace
    sections: [
      { heading: 'Problem', text: 'What was wrong, and for whom.' },
      { heading: 'Process', text: 'Research, flows and wireframes.' },
      { heading: 'Solution', text: 'The final design and key decisions.' },
      { heading: 'Result', text: 'What changed, with numbers if you have them.' },
    ],
  },
]
