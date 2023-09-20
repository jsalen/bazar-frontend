import { useState, useEffect } from 'react';

interface IUseWindowWidth {
  windowWidth: number;
}

export function useWindowWidth(): IUseWindowWidth {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth };
}
