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
            { r: 99, g: 102, b: 241 },   // Indigo
            { r: 139, g: 92, b: 246 },   // Violet
            { r: 236, g: 72, b: 153 },   // Pink
            { r: 34, g: 211, b: 238 },   // Cyan
            { r: 59, g: 130, b: 246 },   // Blue
          ],
          opacity: 0.15,
          bgColor: 'rgba(10, 10, 20, 0.3)',
        };
      } else {
        return {
          colors: [
            { r: 99, g: 102, b: 241 },   // Indigo
            { r: 167, g: 139, b: 250 },  // Light Violet
            { r: 244, g: 114, b: 182 },  // Light Pink
            { r: 34, g: 211, b: 238 },   // Cyan
            { r: 96, g: 165, b: 250 },   // Light Blue
          ],
          opacity: 0.12,
          bgColor: 'rgba(255, 255, 255, 0.1)',
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
        radius: Math.random() * 300 + 200,
        color,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        phase: (i * Math.PI * 2) / colors.length,
      }));
    };

    const drawBlob = (blob: Blob, time: number) => {
      if (!ctx) return;
      
      const { opacity } = getGradientColors();
      
      // Animate position with sine wave
      const animatedX = blob.x + Math.sin(time * 0.001 + blob.phase) * 50;
      const animatedY = blob.y + Math.cos(time * 0.0008 + blob.phase) * 40;
      const animatedRadius = blob.radius + Math.sin(time * 0.0005 + blob.phase) * 30;

      const gradient = ctx.createRadialGradient(
        animatedX, animatedY, 0,
        animatedX, animatedY, animatedRadius
      );

      gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity * 0.5})`);
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
      const gridSize = 60;
      const lineOpacity = isDark ? 0.03 : 0.04;
      
      ctx.strokeStyle = isDark 
        ? `rgba(139, 92, 246, ${lineOpacity})` 
        : `rgba(99, 102, 241, ${lineOpacity})`;
      ctx.lineWidth = 1;

      // Vertical lines with wave distortion
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          const wave = Math.sin((y + timeRef.current * 0.02) * 0.01) * 5;
          if (y === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        ctx.stroke();
      }

      // Horizontal lines with wave distortion
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const wave = Math.sin((x + timeRef.current * 0.02) * 0.01) * 5;
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
