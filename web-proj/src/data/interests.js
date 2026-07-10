import GOWImage from '../assets/interests/sport/GOW.png';
import BGMIImage from '../assets/interests/sport/BGMI.png';
import GTAImage from '../assets/interests/sport/GTA.png';
import NFSImage from '../assets/interests/sport/nfs.png';
import CriImg2025 from '../assets/interests/sport/Cricket_2025.png';
import CriImg2026 from '../assets/interests/sport/Cricket_2026.png';
import volley from '../assets/interests/sport/volleyball.png';
import click1 from '../assets/interests/clicks/Click1.png';
import click2 from '../assets/interests/clicks/Click2.png';
import click3 from '../assets/interests/clicks/Click3.png';
import kitty from '../assets/interests/clicks/kitty.png';
import vid from '../assets/interests/clicks/Vid.mp4';


export const interestCategories = [
  {
    id: 'sport',
    title: 'Sport',
    icon: '⚽',
    description: 'Matches and moments from the field.',
  },
  {
    id: 'video-games',
    title: 'Video Games',
    icon: '🎮',
    description: 'Immersive worlds, thrilling adventures, and competitive gaming.',
  },
  {
    id: 'chess',
    title: 'Chess',
    icon: '♟️',
    description: 'Some Chess Game',
  },
  {
    id: 'clicks',
    title: 'Clicks',
    icon: '📷',
    description: 'Photography captures.',
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
      src: CriImg2025,
      alt: 'Cricket on the field',
      caption: 'MCA Department Cricket Tournament 2025-Winner',
    },
    {
      id: 'sport-2',
      type: 'image',
      src: CriImg2026,
      alt: 'Cricket team',
      caption: 'MCA Department Cricket Tournament 2026-Winner',
    },
    {
      id: 'sport-3',
      type: 'image',
      src: volley,
      alt: 'volleyball',
      caption: 'Yes..!, I play volleyball too',
    },
  ],
  'video-games': [
    {
      id: 'game-1',
      type: 'image',
      src: GOWImage,
      alt: 'God of War',
      caption: 'God of War - Epic battles and Norse mythology.',
    },
    {
      id: 'game-2',
      type: 'image',
      src: BGMIImage,
      alt: 'BGMI',
      caption: 'BGMI - Battle Royale and intense survival.',
    },
    {
      id: 'game-3',
      type: 'image',
      src: GTAImage,
      alt: 'GTA',
      caption: 'GTA - Open-world chaos and thrilling missions.',
    },
    {
      id: 'game-4',
      type: 'image',
      src: NFSImage,
      alt: 'Need for Speed',
      caption: 'Need for Speed - High-speed racing and adrenaline.',
    },
  ],
  chess: [
    {
      id: 'chess-1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      alt: 'Chess board setup',
      caption: 'Casually play some chess with friends.',
    },
    
  ],
  clicks: [
    {
      id: 'clicks-1',
      type: 'image',
      src: click1,
      alt: 'Camera lens',
      caption: 'Casual photography.',
    },
    {
      id: 'clicks-2',
      type: 'image',
      src: click2,
      alt: 'Landscape photography',
      caption: 'Another Casual photography.',
    },
    {
      id: 'clicks-3',
      type: 'image',
      src: click3,
      alt: 'Landscape photography',
      caption: ' An another Casual photography.',
    },
    {
      id: 'clicks-4',
      type: 'video',
      src: vid,
      poster: kitty,
      alt: 'Photography walk clip',
      caption: 'Time laps, haaaaaaaaaahhhhhh, I love it.',
    },
  ],
};
