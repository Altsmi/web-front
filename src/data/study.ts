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

/**
 * A titled group of images. Each row is one line: 1 image is full width,
 * 2, 3 or 4 images sit side by side in equal columns.
 */
export interface Showcase {
  title: string
  rows: ImageItem[][]
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
