export interface Partner {
  index: number;
  key: string;
  name: string;
  imageUrl: string;
}

export const MOCK_PARTNERS: Partner[] = [
  {
    index: 6,
    key: 'logo-2k',
    name: '2K',
    imageUrl: '/partner-logos/logo-2k.png',
  },
  {
    index: 4,
    key: 'logo-book-pro-gameshow',
    name: 'Book Pro Game Show',
    imageUrl: '/partner-logos/logo-book-pro-gameshow.png',
  },
  {
    index: 0,
    key: 'logo-ea',
    name: 'EA',
    imageUrl: '/partner-logos/logo-ea.png',
  },
  {
    index: 2,
    key: 'logo-first-power-up',
    name: 'fist power up',
    imageUrl: '/partner-logos/logo-first-power-up.png',
  },
  {
    index: 1,
    key: 'logo-game',
    name: 'Game',
    imageUrl: '/partner-logos/logo-game.png',
  },
  {
    index: 5,
    key: 'logo-sega',
    name: 'SEGA',
    imageUrl: '/partner-logos/logo-sega.png',
  },
  {
    index: 3,
    key: 'logo-walt-disney',
    name: 'Walt Disney',
    imageUrl: '/partner-logos/logo-walt-disney.png',
  },
];
