import { useElementParallax } from '@/hooks/use-parallax';
import { cn } from '@/lib/utils';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  fadeIn?: boolean;
}

const ParallaxLayer = ({
  children,
  speed = 0.3,
  direction = 'up',
  className,
  fadeIn = false,
}: ParallaxLayerProps) => {
  const { ref, style, isVisible } = useElementParallax(speed, direction);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-700',
        fadeIn && !isVisible && 'opacity-0',
        fadeIn && isVisible && 'opacity-100',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
