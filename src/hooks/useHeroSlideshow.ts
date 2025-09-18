import { useEffect, useState } from 'react';

export type HeroSlide = {
  image: string;
  title1: string;
  title2: string;
  description: string;
};

export const useHeroSlideshow = (slides: HeroSlide[], intervalMs: number = 4000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides, intervalMs]);

  return {
    index,
    slide: slides[index],
    next: () => setIndex((i) => (i + 1) % slides.length),
    prev: () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    setIndex,
  } as const;
};

export default useHeroSlideshow;


