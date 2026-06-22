export const interestCategories = [
  {
    id: 'sport',
    title: 'Sport',
    icon: '⚽',
    description: 'Matches, training sessions, and moments from the field.',
  },
  {
    id: 'chess',
    title: 'Chess',
    icon: '♟️',
    description: 'Games, tournaments, and strategic plays I enjoy studying.',
  },
  {
    id: 'clicks',
    title: 'Clicks',
    icon: '📷',
    description: 'Photography captures — landscapes, portraits, and everyday shots.',
  },
];

/**
 * Replace src/poster URLs with your own files from src/assets/interests/
 * Example: import sportImg from '../assets/interests/sport/match.jpg';
 */
export const interestMedia = {
  sport: [
    {
      id: 'sport-1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba9381?w=800&q=80',
      alt: 'Running on a track',
      caption: 'Morning training session',
    },
    {
      id: 'sport-2',
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      alt: 'Sports highlight clip',
      caption: 'Game day highlights',
    },
    {
      id: 'sport-3',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      alt: 'Football on the pitch',
      caption: 'Weekend match',
    },
  ],
  chess: [
    {
      id: 'chess-1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      alt: 'Chess board setup',
      caption: 'Opening position study',
    },
    {
      id: 'chess-2',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80',
      alt: 'Chess pieces close-up',
      caption: 'Tournament board',
    },
    {
      id: 'chess-3',
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      alt: 'Chess game recording',
      caption: 'Recorded blitz game',
    },
  ],
  clicks: [
    {
      id: 'clicks-1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
      alt: 'Camera lens',
      caption: 'Behind the lens',
    },
    {
      id: 'clicks-2',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
      alt: 'Landscape photography',
      caption: 'Golden hour landscape',
    },
    {
      id: 'clicks-3',
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
      alt: 'Photography walk clip',
      caption: 'Street photography reel',
    },
  ],
};
