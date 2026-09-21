// AIME Wedding World — Editorial Data Types

export type CompositionId =
  | 'full-bleed-video'
  | 'vertical-video-side'
  | 'panoramic-image'
  | 'split-screen'
  | 'image-typography'
  | 'text-floating-video'
  | 'photo-collage'
  | 'asymmetric'
  | 'centered-image-negative'
  | 'double-page'
  | 'typography-dominant'
  | 'video-photo-sequence'
  | 'vertical-title'
  | 'photo-essay'
  | 'typographic-essay';

export type Category =
  | 'Ceremony'
  | 'Tradition'
  | 'Place'
  | 'Fashion'
  | 'Craft'
  | 'Photography'
  | 'Music'
  | 'Gastronomy'
  | 'Architecture'
  | 'Journey'
  | 'History'
  | 'Jewelry'
  | 'Florals'
  | 'Object'
  | 'Portrait'
  | 'Season'
  | 'Dance'
  | 'Light'
  | 'Archive';

export interface Video {
  src: string;
  poster?: string;
  aspect?: '16/9' | '9/16' | '4/5' | '1/1' | '21/9' | '3/4' | 'auto';
}

export interface ImageRef {
  src: string;
  alt: string;
  credit?: string;
}

export interface EditorialParagraph {
  text: string;
  emphasis?: boolean;
}

export interface Day {
  id: number;                 // 1..365
  date: string;               // 'JAN 04'
  isoDate: string;            // '2026-01-04'
  title: string;
  subtitle?: string;
  category: Category;
  country: string;
  city: string;
  coordinates: string;        // '48°51′N · 2°21′E'
  video: Video;
  images?: ImageRef[];
  body: EditorialParagraph[];
  caption: string;
  credit: string;
  composition: CompositionId;
  tags: string[];
}

export interface CompositionMeta {
  id: CompositionId;
  label: string;
  description: string;
}