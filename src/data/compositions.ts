import type { CompositionId } from '../lib/types';

// Curated palette of editorial compositions — alternating strategically
// across the 365 days so the magazine never repeats itself.
export interface CompositionDef {
  id: CompositionId;
  label: string;
}

export const COMPOSITIONS: CompositionDef[] = [
  { id: 'full-bleed-video', label: 'Full-bleed video + monumental title' },
  { id: 'vertical-video-side', label: 'Vertical video + lateral title' },
  { id: 'panoramic-image', label: 'Panoramic image' },
  { id: 'split-screen', label: 'Split-screen image and text' },
  { id: 'image-typography', label: 'Image paired with monumental typography' },
  { id: 'text-floating-video', label: 'Floating text over video' },
  { id: 'photo-collage', label: 'Photographic collage' },
  { id: 'asymmetric', label: 'Asymmetric composition' },
  { id: 'centered-image-negative', label: 'Centered image, vast negative space' },
  { id: 'double-page', label: 'Digital double page' },
  { id: 'typography-dominant', label: 'Typography-dominant spread' },
  { id: 'video-photo-sequence', label: 'Video + photo sequence' },
  { id: 'vertical-title', label: 'Vertical title column' },
  { id: 'photo-essay', label: 'Photo essay' },
  { id: 'typographic-essay', label: 'Typographic essay' },
];

// Strategic rotation. Same composition is rarely repeated within 5 days.
const ROTATION: CompositionId[] = [
  'full-bleed-video', 'vertical-video-side', 'panoramic-image', 'split-screen',
  'image-typography', 'text-floating-video', 'photo-collage', 'asymmetric',
  'centered-image-negative', 'double-page', 'typography-dominant',
  'video-photo-sequence', 'vertical-title', 'photo-essay', 'typographic-essay',
];

export function compositionFor(day: number, category?: string): CompositionId {
  // Use the day index with a deterministic spread. Some compositions pair
  // better with certain categories; nudges are subtle (every 13 days).
  const base = ROTATION[day % ROTATION.length];
  if (category === 'Photography' && day % 11 === 0) return 'photo-essay';
  if (category === 'Architecture' && day % 9 === 0) return 'double-page';
  if (category === 'Fashion' && day % 7 === 0) return 'image-typography';
  if (category === 'History' && day % 17 === 0) return 'typographic-essay';
  if (category === 'Journey' && day % 13 === 0) return 'panoramic-image';
  return base;
}