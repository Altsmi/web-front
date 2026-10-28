export interface ImageItem {
  src: string
  alt: string
  caption?: string
}

export interface PhaseData {
  type: 'phase'
  number?: number
  title: string
}

export interface TextData {
  type: 'text'
  heading?: string
  body: string[]
  image?: ImageItem
}

export interface FactsData {
  type: 'facts'
  heading?: string
  intro?: string
  items: { label: string; text: string }[]
  image?: ImageItem
}

export interface StatsData {
  type: 'stats'
  heading?: string
  items: { value: string; label: string; note?: string }[]
  note?: string
  image?: ImageItem
}

export interface ImagesData {
  type: 'images'
  heading?: string
  columns?: 1 | 2 | 3 | 4
  items: ImageItem[]
}

export interface TableData {
  type: 'table'
  heading?: string
  intro?: string
  columns: string[]
  rows: string[][]
  highlightRow?: number
  note?: string
}

export type Block = PhaseData | TextData | FactsData | StatsData | ImagesData | TableData
