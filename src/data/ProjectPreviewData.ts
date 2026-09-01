import type { ProjectPreview } from '@/models/ProjectPreviewModel'

export const projectPreviewData: ProjectPreview[] = [
  {
    id: 1,
    name: 'ARCANE BOOKSTORE',
    description: 'A comprehensive visual architecture built for a hybrid online/offline bookstore.',
    img: '/project_img/arcane_banner.jpg',
    tools: ['/icons/logo_figma.svg', '/icons/logo_illustrator.svg', '/icons/logo_photoshop.svg'],
  },
  {
    id: 2,
    name: 'WILD WHISPERS',
    description:
      'A structural design project focused on complex typography, grid architecture, and visual hierarchy.',
    img: '/project_img/wild_banner.jpg',
    tools: ['/icons/logo_indesign.svg', '/icons/logo_photoshop.svg'],
  },
  {
    id: 3,
    name: 'SWIFT VENTURE DELIVERY',
    description:
      'A robust visual identity system developed for a logistics brand, engineered to scale seamlessly across physical and digital touchpoints.',
    img: '/project_img/swift_banner.jpg',
    tools: ['/icons/logo_figma.svg', '/icons/logo_illustrator.svg', '/icons/logo_photoshop.svg'],
  },
  {
    id: 4,
    name: 'SKETCH & DRIP',
    description: 'An information design exercise centered on maximizing readability.',
    img: '/project_img/sketch/sketch_img4.jpg',
    tools: ['/icons/logo_illustrator.svg', '/icons/logo_photoshop.svg'],
  },
]
