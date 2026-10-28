export interface DevProject {
  slug: string
  title: string
  year: string
  status: 'Live' | 'In progress'
  description: string
  stack: string[]
  points: string[]
  source?: string
}

export const devProjects: DevProject[] = [
  {
    slug: 'portfolio',
    title: 'This site',
    year: '2026',
    status: 'Live',
    description: 'A responsive portfolio with case studies driven by data.',
    stack: ['Vue', 'TypeScript', 'Tailwind CSS'],
    points: [
      'Responsive layout and fluid type',
      'Keyboard-friendly navigation and viewers',
      'Page transitions and nested routes',
      'Projects written as data, not pages',
    ],
    // source: 'https://github.com/your-name/your-repo', // add when the repo is public
  },
]
