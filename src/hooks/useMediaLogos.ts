import { useState, useEffect } from 'react';
import mediaLogosData from '../content/media-logos.json';

interface MediaLogo {
  name: string;
  image: string;
  url: string;
}

export const useMediaLogos = () => {
  const [mediaLogos, setMediaLogos] = useState<MediaLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setMediaLogos(mediaLogosData.logos || []);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { mediaLogos, loading };
};
