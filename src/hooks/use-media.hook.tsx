import { useEffect, useState } from 'react';

type Media = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const getMedia = (media: Media) => {
  switch (media) {
    case 'sm':
      return '(min-width: 640px)';
    case 'md':
      return '(min-width: 768px)';
    case 'lg':
      return '(min-width: 1024px)';
    case 'xl':
      return '(min-width: 1280px)';
    case '2xl':
      return '(min-width: 1536px)';
  }
};

export const useMedia = (media: Media) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = matchMedia(getMedia(media));
      setMatch(matches);
    };

    changeMatch();
    addEventListener('resize', changeMatch);

    return () => {
      removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};
