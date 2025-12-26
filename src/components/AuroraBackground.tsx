import { useEffect, useRef } from 'react';

export const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getGradientColors = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        return {
          colors: [
            { r: 79, g: 82, b: 201 },    // Softer Indigo
            { r: 119, g: 72, b: 206 },   // Softer Violet
            { r: 196, g: 52, b: 133 },   // Softer Pink
            { r: 24, g: 171, b: 198 },   // Softer Cyan
          ],
          opacity: 0.1,
          bgColor: 'rgba(10, 10, 20, 0.15)',
        };
      } else {
        return {
          colors: [
            { r: 129, g: 132, b: 251 },  // Lighter Indigo
            { r: 187, g: 159, b: 250 },  // Lighter Violet
            { r: 248, g: 154, b: 202 },  // Lighter Pink
            { r: 114, g: 221, b: 248 },  // Lighter Cyan
          ],
          opacity: 0.08,
          bgColor: 'rgba(255, 255, 255, 0.05)',
        };
      }
    };

    interface Blob {
      x: number;
      y: number;
      radius: number;
      color: { r: number; g: number; b: number };
      speedX: number;
      speedY: number;
      phase: number;
    }

    let blobs: Blob[] = [];

    const createBlobs = () => {
      const { colors } = getGradientColors();
      blobs = colors.map((color, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 400 + 250,
        color,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        phase: (i * Math.PI * 2) / colors.length,
      }));
    };

    const drawBlob = (blob: Blob, time: number) => {
      if (!ctx) return;
      
      const { opacity } = getGradientColors();
      
      // Smoother, slower sine wave animation
      const animatedX = blob.x + Math.sin(time * 0.0004 + blob.phase) * 80;
      const animatedY = blob.y + Math.cos(time * 0.0003 + blob.phase) * 60;
      const animatedRadius = blob.radius + Math.sin(time * 0.0002 + blob.phase) * 50;

      const gradient = ctx.createRadialGradient(
        animatedX, animatedY, 0,
        animatedX, animatedY, animatedRadius
      );

      gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity})`);
      gradient.addColorStop(0.4, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity * 0.4})`);
      gradient.addColorStop(0.7, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity * 0.15})`);
      gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      timeRef.current += 16;
      const { bgColor } = getGradientColors();
      
      // Clear with slight trail effect
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Enable blend mode for glow effect
      ctx.globalCompositeOperation = 'lighter';
      
      // Update and draw blobs
      blobs.forEach((blob) => {
        // Slow movement
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Bounce off edges
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        drawBlob(blob, timeRef.current);
      });
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      
      // Add mesh grid overlay
      drawMeshGrid();

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawMeshGrid = () => {
      if (!ctx || !canvas) return;
      
      const isDark = document.documentElement.classList.contains('dark');
      const gridSize = 80;
      const lineOpacity = isDark ? 0.02 : 0.025;
      
      ctx.strokeStyle = isDark 
        ? `rgba(139, 92, 246, ${lineOpacity})` 
        : `rgba(99, 102, 241, ${lineOpacity})`;
      ctx.lineWidth = 0.5;

      // Vertical lines with gentler wave distortion
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 15) {
          const wave = Math.sin((y + timeRef.current * 0.008) * 0.008) * 3;
          if (y === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        ctx.stroke();
      }

      // Horizontal lines with gentler wave distortion
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 15) {
          const wave = Math.sin((x + timeRef.current * 0.008) * 0.008) * 3;
          if (x === 0) {
            ctx.moveTo(x, y + wave);
          } else {
            ctx.lineTo(x, y + wave);
          }
        }
        ctx.stroke();
      }
    };

    const handleThemeChange = () => {
      const { colors } = getGradientColors();
      blobs.forEach((blob, i) => {
        blob.color = colors[i % colors.length];
      });
    };

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    resizeCanvas();
    createBlobs();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createBlobs();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
};
