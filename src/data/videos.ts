// Video library — curated cinematic clips that map to thematic contexts.
// Used by the day data to ensure consistent visual quality across the year.

export interface VideoEntry {
  src: string;
  poster: string;
  themes: string[]; // tags used for matching
}

export const VIDEO_LIBRARY: Record<string, VideoEntry> = {
  ceremony: { src: '/videos/ceremony-01.mp4', poster: '/images/poster-portrait.jpg', themes: ['ceremony', 'couple', 'bride'] },
  ceremonyAlt: { src: '/videos/ceremony-02.mp4', poster: '/images/poster-aisle.jpg', themes: ['ceremony', 'vows'] },
  portrait: { src: '/videos/portrait-01.mp4', poster: '/images/poster-portrait.jpg', themes: ['portrait', 'fashion', 'bride'] },
  portraitAlt: { src: '/videos/portrait-02.mp4', poster: '/images/poster-couple.jpg', themes: ['portrait', 'silhouette'] },
  romance: { src: '/videos/romance-01.mp4', poster: '/images/poster-couple.jpg', themes: ['romance', 'couple', 'sunset'] },
  fashion: { src: '/videos/fashion-01.mp4', poster: '/images/poster-dress.jpg', themes: ['fashion', 'dress', 'fabric'] },
  fabric: { src: '/videos/fabric-01.mp4', poster: '/images/poster-fabric.jpg', themes: ['fabric', 'craft', 'textile'] },
  florals: { src: '/videos/florals-01.mp4', poster: '/images/poster-floral.jpg', themes: ['florals', 'flowers'] },
  florals2: { src: '/videos/cherry-01.mp4', poster: '/images/poster-cherry.jpg', themes: ['florals', 'japan', 'spring'] },
  architecture: { src: '/videos/architecture-01.mp4', poster: '/images/poster-architecture.jpg', themes: ['architecture', 'interior'] },
  church: { src: '/videos/architecture-02.mp4', poster: '/images/poster-aisle.jpg', themes: ['architecture', 'church', 'ceremony'] },
  ballroom: { src: '/videos/ballroom-01.mp4', poster: '/images/poster-architecture.jpg', themes: ['ballroom', 'reception', 'interior'] },
  italy: { src: '/videos/italy-01.mp4', poster: '/images/poster-tuscany.jpg', themes: ['italy', 'venice', 'travel'] },
  greece: { src: '/videos/greece-01.mp4', poster: '/images/poster-stone.jpg', themes: ['greece', 'architecture'] },
  egypt: { src: '/videos/egypt-01.mp4', poster: '/images/poster-persia.jpg', themes: ['egypt', 'desert', 'africa'] },
  morocco: { src: '/videos/morocco-01.mp4', poster: '/images/poster-morocco.jpg', themes: ['morocco', 'africa', 'culture'] },
  desert: { src: '/videos/desert-01.mp4', poster: '/images/poster-stone.jpg', themes: ['desert', 'travel'] },
  asia: { src: '/videos/asia-01.mp4', poster: '/images/poster-japan.jpg', themes: ['asia', 'japan', 'zen'] },
  sky: { src: '/videos/sky-01.mp4', poster: '/images/poster-aurora.jpg', themes: ['sky', 'aurora', 'northern'] },
  sky2: { src: '/videos/sky-02.mp4', poster: '/images/poster-balloons.jpg', themes: ['sky', 'balloons', 'cappadocia'] },
  stars: { src: '/videos/stars-01.mp4', poster: '/images/poster-stars.jpg', themes: ['night', 'stars'] },
  forest: { src: '/videos/forest-01.mp4', poster: '/images/poster-cherry.jpg', themes: ['forest', 'nature'] },
  nature: { src: '/videos/nature-01.mp4', poster: '/images/poster-ocean.jpg', themes: ['ocean', 'nature'] },
  nature2: { src: '/videos/nature-02.mp4', poster: '/images/poster-fjord.jpg', themes: ['wheat', 'nature', 'golden'] },
  france: { src: '/videos/france-01.mp4', poster: '/images/poster-paris.jpg', themes: ['france', 'provence'] },
  usa: { src: '/videos/usa-01.mp4', poster: '/images/poster-castle.jpg', themes: ['usa', 'city', 'skyline'] },
  dance: { src: '/videos/dance-01.mp4', poster: '/images/poster-portrait.jpg', themes: ['dance', 'celebration'] },
  ballet: { src: '/videos/ballet-01.mp4', poster: '/images/poster-portrait.jpg', themes: ['dance', 'art'] },
  rain: { src: '/videos/rain-01.mp4', poster: '/images/poster-paris.jpg', themes: ['rain', 'moody', 'paris'] },
  candle: { src: '/videos/light-01.mp4', poster: '/images/poster-table.jpg', themes: ['candle', 'light', 'moody'] },
  details: { src: '/videos/details-01.mp4', poster: '/images/poster-table.jpg', themes: ['details', 'table', 'reception'] },
  celebration: { src: '/videos/celebration-01.mp4', poster: '/images/poster-couple.jpg', themes: ['celebration', 'toast'] },
  jewelry: { src: '/videos/jewelry-01.mp4', poster: '/images/poster-ring.jpg', themes: ['jewelry', 'rings'] },
  textile: { src: '/videos/textile-01.mp4', poster: '/images/poster-tile.jpg', themes: ['textile', 'craft'] },
  abstract: { src: '/videos/abstract-01.mp4', poster: '/images/poster-architecture.jpg', themes: ['abstract', 'marble'] },
  arch: { src: '/videos/arch-01.mp4', poster: '/images/poster-arch.jpg', themes: ['arch', 'garden'] },
  train: { src: '/videos/train-01.mp4', poster: '/images/poster-japan.jpg', themes: ['train', 'travel'] },
  road: { src: '/videos/road-01.mp4', poster: '/images/poster-tuscany.jpg', themes: ['road', 'journey'] },
  archive: { src: '/videos/archive-01.mp4', poster: '/images/poster-archive.jpg', themes: ['archive', 'history'] },
  horse: { src: '/videos/horse-01.mp4', poster: '/images/poster-castle.jpg', themes: ['horse', 'tradition'] },
};

export const ALL_VIDEOS = Object.values(VIDEO_LIBRARY);