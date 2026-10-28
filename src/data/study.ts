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
