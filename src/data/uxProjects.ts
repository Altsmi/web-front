import type { Decision, Glance, Overview, Phase, Showcase } from '@/data/study'

export interface Project {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  image: string
  alt: string
  featured?: boolean
  /** Soft color behind the hero image. Defaults to blue. */
  glow?: string
  /** Short label for cards, e.g. "Invoicing app". */
  kind?: string
  link?: string
  role: string
  timeline: string
  tools: string[]
  type?: string
  overview?: Overview
  glance?: Glance[]
  decisions?: Decision[]
  story?: string[]
  services?: string[]
  showcase?: Showcase[]
  phases: Phase[]
}

export const projectPath = (p: Project) => p.link ?? `/work/ux-ui/${p.slug}`

export const uxProjects: Project[] = [
  {
    slug: 'ninox',
    title: 'Ninox',
    kind: 'Invoicing app',
    summary:
      'An invoicing app. Contractors send an invoice from the job site in under 2 minutes. Business owners see who has paid and who hasn’t.',
    tags: ['Research', 'Wireframing', 'Prototyping', 'Usability testing'],
    year: '2026',
    image: '/project_img/invoice/Presentation_02.jpg',
    alt: 'Ninox landing page on desktop and phone',
    role: 'Product and UX/UI Designer',
    timeline: '4 weeks',
    tools: ['Figma', 'FigJam', 'Maze'],
    type: 'Self-initiated concept project',
    glow: '#8cb2f2',

    story: [
      'Contractors lose time setting up an account just to send one invoice.',
      'Business owners can’t tell who has paid without digging through a list.',
      'I designed two flows: send an invoice from your phone with no account, and a desktop hub that shows who has paid.',
    ],
    services: [
      'Research',
      'Personas',
      'Competitive analysis',
      'Wireframing',
      'Prototyping',
      'Usability testing',
      'UI design',
    ],
    showcase: [
      {
        title: 'App design',
        rows: [
          [
            {
              src: '/project_img/invoice/Presentation_01.jpg',
              alt: 'Ninox mockups on desktop and phone',
            },
          ],
          [
            {
              src: '/project_img/invoice/desktop_after.jpg',
              alt: 'Desktop hub with summary cards and invoice table',
            },
          ],
        ],
      },
      {
        title: 'Research',
        rows: [
          [
            {
              src: '/project_img/invoice/Persona_1.jpg',
              alt: 'Persona: Marcus Vance, independent field contractor',
            },
            {
              src: '/project_img/invoice/Persona_3.jpg',
              alt: 'Persona: David Chen, small business owner',
            },
          ],
          [
            {
              src: '/project_img/invoice/flow.jpg',
              alt: 'User flow: guest flow on mobile and hub flow on desktop',
            },
          ],
        ],
      },
      {
        title: 'Design',
        rows: [
          [
            { src: '/project_img/invoice/digital_01.jpg', alt: 'Landing page concept 1' },
            { src: '/project_img/invoice/digital_02.jpg', alt: 'Landing page concept 2' },
            { src: '/project_img/invoice/digital_03.jpg', alt: 'Landing page concept 3' },
          ],
        ],
      },
      {
        title: 'Test',
        rows: [
          [
            {
              src: '/project_img/invoice/mobile_before.jpg',
              alt: 'Before: mobile rate input with small edit links',
            },
            {
              src: '/project_img/invoice/mobile_after.jpg',
              alt: 'After: mobile rate input with quantity stepper',
            },
          ],
          [
            {
              src: '/project_img/invoice/desktop_before.jpg',
              alt: 'Before: desktop invoice table with identical gray rows',
            },
            {
              src: '/project_img/invoice/desktop_after.jpg',
              alt: 'After: desktop invoice table with overdue card and red row tints',
            },
          ],
        ],
      },
    ],

    phases: [],
  },
  {
    slug: 'ui-studies',
    title: 'UI Studies',
    kind: 'Interaction design',
    summary:
      'Small studies of single interface pieces, from wireframe to a working interaction. Each one has a problem, a decision and a short video.',
    tags: ['Prototyping', 'Wireframing', 'Interaction design'],
    year: '2026',
    image: '/ui-studies/cover.jpg',
    alt: 'Assign task modal in three states: collapsed button, open modal and confirmation',
    role: 'UI Designer',
    glow: '#f2d98a',
    timeline: 'Ongoing',
    tools: ['Figma'],
    story: [
      'Small studies of single interface pieces, from wireframe to a working interaction.',
      'Each study has a short video, then the wireframe, type, grid and components behind it.',
    ],
    services: ['Wireframing', 'Prototyping', 'Interaction design', 'UI design'],
    phases: [],
  },
]

/** Projects shown on Home, Work and in "next project" links. */
export const visibleProjects = uxProjects
