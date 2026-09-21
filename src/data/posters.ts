// Editorial still images used as posters and collage frames.
export interface PosterEntry {
  src: string;
  alt: string;
  themes: string[];
}

export const POSTERS: Record<string, PosterEntry> = {
  table: { src: '/images/poster-table.jpg', alt: 'Editorial wedding table detail', themes: ['details', 'reception'] },
  floral: { src: '/images/poster-floral.jpg', alt: 'White rose close-up', themes: ['florals'] },
  portrait: { src: '/images/poster-portrait.jpg', alt: 'Cinematic bride portrait', themes: ['portrait'] },
  stone: { src: '/images/poster-stone.jpg', alt: 'Ancient stone amphitheatre', themes: ['architecture'] },
  ring: { src: '/images/poster-ring.jpg', alt: 'Diamond rings macro', themes: ['jewelry'] },
  paris: { src: '/images/poster-paris.jpg', alt: 'Paris streets with Eiffel Tower', themes: ['paris', 'france'] },
  architecture: { src: '/images/poster-architecture.jpg', alt: 'Minimal concrete architecture', themes: ['architecture'] },
  ocean: { src: '/images/poster-ocean.jpg', alt: 'Dramatic coastal cliffs', themes: ['ocean', 'nature'] },
  dress: { src: '/images/poster-dress.jpg', alt: 'Wedding dress by window', themes: ['fashion'] },
  couple: { src: '/images/poster-couple.jpg', alt: 'Cinematic black and white couple', themes: ['couple'] },
  india: { src: '/images/poster-india.jpg', alt: 'Indian bride hands with mehndi', themes: ['india'] },
  japan: { src: '/images/poster-japan.jpg', alt: 'Japanese traditional ceremony', themes: ['japan'] },
  morocco: { src: '/images/poster-morocco.jpg', alt: 'Moroccan riad courtyard', themes: ['morocco'] },
  tuscany: { src: '/images/poster-tuscany.jpg', alt: 'Tuscan countryside at sunset', themes: ['italy'] },
  fjord: { src: '/images/poster-fjord.jpg', alt: 'Scandinavian fjord landscape', themes: ['scandinavia'] },
  castle: { src: '/images/poster-castle.jpg', alt: 'Scottish castle at sunset', themes: ['scotland', 'architecture'] },
  africa: { src: '/images/poster-africa.jpg', alt: 'African bride in traditional attire', themes: ['africa'] },
  persia: { src: '/images/poster-persia.jpg', alt: 'Persian palace interior', themes: ['persia', 'middle east'] },
  hands: { src: '/images/poster-hands.jpg', alt: 'Editorial hands detail', themes: ['details'] },
  bouquet: { src: '/images/poster-bouquet.jpg', alt: 'Wedding bouquet close-up', themes: ['florals'] },
  aisle: { src: '/images/poster-aisle.jpg', alt: 'Church aisle wedding ceremony', themes: ['ceremony', 'church'] },
};