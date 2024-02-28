
import { useEffect, useState } from 'react';

interface ScreenSize {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 820;
      const isDesktop = window.innerWidth > 820;
      setScreenSize({ isMobile, isDesktop });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};