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
 * One tile of a bento grid. The grid has 6 columns on desktop and 2 on a phone.
 * cols: how many of the 6 columns it covers. rows: how many rows tall (1 to 3).
 * Images are cropped to fit the tile, and the full image opens in the viewer.
 */
export interface BentoImage extends ImageItem {
  cols: 2 | 3 | 4 | 6
  rows: 1 | 2 | 3
  /** Crop from the top (screens) instead of the center (mockups, diagrams). */
  top?: boolean
}

/** A titled bento group. */
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
