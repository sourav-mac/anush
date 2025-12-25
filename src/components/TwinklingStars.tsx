import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  phase: number;
}

export const TwinklingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      starsRef.current = Array.from({ length: Math.min(starCount, 150) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.3,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const getStarColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark 
        ? { primary: '255, 255, 255', secondary: '139, 92, 246' }
        : { primary: '99, 102, 241', secondary: '167, 139, 250' };
    };

    const drawStar = (star: Star, time: number) => {
      if (!ctx) return;
      
      const colors = getStarColor();
      
      // Calculate twinkling opacity
      const twinkle = Math.sin(time * star.twinkleSpeed + star.phase);
      star.opacity = star.baseOpacity + twinkle * 0.3;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));

      // Draw star with glow
      const useSecondary = Math.random() > 0.7;
      const color = useSecondary ? colors.secondary : colors.primary;
      
      // Outer glow
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${star.opacity * 0.2})`;
      ctx.fill();

      // Inner star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${star.opacity})`;
      ctx.fill();

      // Bright center
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
      ctx.fill();

      // Occasional cross sparkle for larger stars
      if (star.size > 1.5 && twinkle > 0.5) {
        const sparkleSize = star.size * 3;
        ctx.strokeStyle = `rgba(${color}, ${star.opacity * 0.4})`;
        ctx.lineWidth = 0.5;
        
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(star.x - sparkleSize, star.y);
        ctx.lineTo(star.x + sparkleSize, star.y);
        ctx.stroke();
        
        // Vertical line
        ctx.beginPath();
        ctx.moveTo(star.x, star.y - sparkleSize);
        ctx.lineTo(star.x, star.y + sparkleSize);
        ctx.stroke();
      }
    };

    let time = 0;
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      time += 16;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        drawStar(star, time);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
