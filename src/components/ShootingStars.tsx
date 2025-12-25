import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
  active: boolean;
}

export const ShootingStars = () => {
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
    };

    const getStarColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark 
        ? { head: 'rgba(255, 255, 255, 1)', trail: 'rgba(139, 92, 246, 0.8)' }
        : { head: 'rgba(99, 102, 241, 1)', trail: 'rgba(167, 139, 250, 0.8)' };
    };

    const createStar = (): Star => {
      const startFromTop = Math.random() > 0.5;
      const angle = (Math.random() * 30 + 20) * (Math.PI / 180); // 20-50 degrees
      
      return {
        x: startFromTop 
          ? Math.random() * canvas.width * 0.7 
          : -50,
        y: startFromTop 
          ? -50 
          : Math.random() * canvas.height * 0.3,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 15 + 10,
        angle: angle,
        opacity: 1,
        trail: [],
        active: true,
      };
    };

    const spawnStar = () => {
      if (starsRef.current.length < 3) {
        starsRef.current.push(createStar());
      }
      
      // Random interval between 2-6 seconds
      const nextSpawn = Math.random() * 4000 + 2000;
      setTimeout(spawnStar, nextSpawn);
    };

    const drawStar = (star: Star) => {
      if (!ctx || !star.active) return;
      
      const colors = getStarColor();
      
      // Draw trail
      star.trail.forEach((point, index) => {
        const trailOpacity = point.opacity * (index / star.trail.length) * 0.5;
        const size = (index / star.trail.length) * 2;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = colors.trail.replace('0.8', trailOpacity.toString());
        ctx.fill();
      });

      // Draw the main shooting star (head)
      const tailX = star.x - Math.cos(star.angle) * star.length;
      const tailY = star.y - Math.sin(star.angle) * star.length;

      // Create gradient for the comet
      const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, colors.trail);
      gradient.addColorStop(1, colors.head);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(star.x, star.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Glow effect at head
      ctx.beginPath();
      ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = colors.head;
      ctx.shadowBlur = 10;
      ctx.shadowColor = colors.head;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Sparkle effect
      if (Math.random() > 0.7) {
        const sparkleX = star.x + (Math.random() - 0.5) * 10;
        const sparkleY = star.y + (Math.random() - 0.5) * 10;
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current = starsRef.current.filter((star) => {
        if (!star.active) return false;

        // Add current position to trail
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });
        
        // Limit trail length
        if (star.trail.length > 30) {
          star.trail.shift();
        }

        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Fade out near edges
        if (star.x > canvas.width * 0.8 || star.y > canvas.height * 0.8) {
          star.opacity -= 0.05;
        }

        // Remove if off screen or faded
        if (star.x > canvas.width + 100 || 
            star.y > canvas.height + 100 || 
            star.opacity <= 0) {
          star.active = false;
          return false;
        }

        drawStar(star);
        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    // Start spawning stars after a short delay
    setTimeout(spawnStar, 1000);

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
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};
