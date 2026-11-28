import type { Block, ImageItem } from '@/data/blocks'

export interface Overview {
  challenge: string
  solution: string
  result: string
}

export interface Glance {
  value: string
  label: string
}

export interface Decision {
  title: string
  change: string
  before?: ImageItem
  after: ImageItem
}

export interface BentoImage extends ImageItem {
  cols: 2 | 3 | 4 | 6
  rows: 1 | 2 | 3
  /** Crop from the top (screens) instead of the center (mockups, diagrams). */
  top?: boolean
}

export interface Showcase {
  title: string
  tiles: BentoImage[]
}

export interface Phase {
  id: string
  number?: number
  title: string
  takeaway: string
  points: string[]
  visual?: ImageItem[]
  detailsLabel?: string
  defaultOpen?: boolean
  details: Block[]
}
