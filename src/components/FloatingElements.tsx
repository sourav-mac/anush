import { useParallax } from '@/hooks/use-parallax';

const FloatingElements = () => {
  const { scrollY } = useParallax();

  const elements = [
    { size: 4, x: 10, y: 20, speed: 0.02, opacity: 0.15 },
    { size: 6, x: 85, y: 15, speed: 0.03, opacity: 0.1 },
    { size: 3, x: 70, y: 60, speed: 0.015, opacity: 0.12 },
    { size: 8, x: 15, y: 70, speed: 0.025, opacity: 0.08 },
    { size: 5, x: 90, y: 50, speed: 0.02, opacity: 0.1 },
    { size: 4, x: 5, y: 45, speed: 0.018, opacity: 0.12 },
    { size: 6, x: 75, y: 85, speed: 0.022, opacity: 0.1 },
    { size: 3, x: 50, y: 10, speed: 0.028, opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-primary"
          style={{
            width: `${el.size}px`,
            height: `${el.size}px`,
            left: `${el.x}%`,
            top: `${el.y}%`,
            opacity: el.opacity,
            transform: `translateY(${scrollY * el.speed * (index % 2 === 0 ? 1 : -1)}px)`,
            willChange: 'transform',
          }}
        />
      ))}
      
      {/* Floating rings */}
      <div
        className="absolute w-32 h-32 rounded-full border border-primary/10"
        style={{
          left: '20%',
          top: '30%',
          transform: `translateY(${scrollY * 0.04}px) rotate(${scrollY * 0.02}deg)`,
          willChange: 'transform',
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full border border-primary/5"
        style={{
          right: '10%',
          top: '60%',
          transform: `translateY(${scrollY * -0.03}px) rotate(${scrollY * -0.015}deg)`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default FloatingElements;
