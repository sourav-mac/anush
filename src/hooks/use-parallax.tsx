import { useEffect, useState, useRef, RefObject } from 'react';

interface ParallaxState {
  scrollY: number;
  progress: number;
  offsetY: number;
}

export const useParallax = (speed: number = 0.5): ParallaxState => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
  const offsetY = scrollY * speed;

  return { scrollY, progress, offsetY };
};

interface ElementParallax {
  ref: RefObject<HTMLDivElement>;
  style: React.CSSProperties;
  isVisible: boolean;
}

export const useElementParallax = (
  speed: number = 0.3,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): ElementParallax => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      
      requestAnimationFrame(() => {
        setOffset(distanceFromCenter * speed);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return {
    ref,
    style: {
      transform: getTransform(),
      willChange: 'transform',
    },
    isVisible,
  };
};

export const useScrollProgress = (ref: RefObject<HTMLElement>): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate progress from when element enters viewport to when it leaves
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = windowHeight + elementHeight;
      const current = -start;
      
      const calculatedProgress = Math.max(0, Math.min(1, current / total));
      
      requestAnimationFrame(() => {
        setProgress(calculatedProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};
