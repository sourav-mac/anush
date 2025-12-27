import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const TextReveal = ({
  children,
  className,
  delay = 0,
  staggerDelay = 50,
  as: Component = 'span',
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = children.split(' ');

  return (
    <div ref={ref} className="overflow-hidden">
      <Component className={cn('inline-block', className)}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.25em]"
          >
            <span
              className={cn(
                'inline-block transition-all duration-700',
                isVisible
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-full opacity-0 blur-sm'
              )}
              style={{
                transitionDelay: isVisible ? `${delay + index * staggerDelay}ms` : '0ms',
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Component>
    </div>
  );
};

export default TextReveal;
