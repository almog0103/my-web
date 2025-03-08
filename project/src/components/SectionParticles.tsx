import React, { useEffect, useRef } from 'react';

interface SectionParticlesProps {
  opacity?: number;
  sectionHeight: number;
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

const SectionParticles: React.FC<SectionParticlesProps> = ({ opacity = 0.7, sectionHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 250 });
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = sectionHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${sectionHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);

      // Match homepage particle density
      const baseParticleCount = Math.min(
        Math.floor((window.innerWidth * sectionHeight) / 14000),
        128
      );

      pointsRef.current = Array.from({ length: baseParticleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * sectionHeight,
        vx: (Math.random() - 0.5) * 0.48,
        vy: (Math.random() - 0.5) * 0.48,
        radius: Math.random() * 3 + 1.5,
        alpha: Math.random() * 0.5 + 0.2,
        targetAlpha: Math.random() * 0.5 + 0.2
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = '#0A1128';
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      pointsRef.current.forEach((point, i) => {
        const alphaDiff = point.targetAlpha - point.alpha;
        point.alpha += alphaDiff * 0.03;

        if (Math.random() < 0.005) {
          point.targetAlpha = Math.random() * 0.5 + 0.2;
        }

        point.x += point.vx * 0.6;
        point.y += point.vy * 0.6;

        if (point.x < 0 || point.x > window.innerWidth) {
          point.vx *= -0.95;
          point.x = Math.max(0, Math.min(window.innerWidth, point.x));
        }
        if (point.y < 0 || point.y > sectionHeight) {
          point.vy *= -0.95;
          point.y = Math.max(0, Math.min(sectionHeight, point.y));
        }

        const distanceToMouse = Math.hypot(
          point.x - mouseRef.current.x,
          point.y - mouseRef.current.y
        );

        if (distanceToMouse < mouseRef.current.radius) {
          const angle = Math.atan2(
            point.y - mouseRef.current.y,
            point.x - mouseRef.current.x
          );
          const force = Math.pow((mouseRef.current.radius - distanceToMouse) / mouseRef.current.radius, 2);
          
          const repulsionStrength = 2;
          point.x += Math.cos(angle) * force * repulsionStrength;
          point.y += Math.sin(angle) * force * repulsionStrength;
          
          point.vx += Math.cos(angle) * force * 0.3;
          point.vy += Math.sin(angle) * force * 0.3;

          point.targetAlpha = Math.min(0.9, 0.5 + force * 0.5);
        } else {
          point.targetAlpha = Math.random() * 0.3 + 0.2;
        }

        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 6
        );
        gradient.addColorStop(0, `rgba(18, 130, 162, ${point.alpha * 2})`);
        gradient.addColorStop(0.5, `rgba(18, 130, 162, ${point.alpha})`);
        gradient.addColorStop(1, 'rgba(18, 130, 162, 0)');

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        pointsRef.current.forEach((otherPoint, j) => {
          if (i === j) return;
          const distance = Math.hypot(
            point.x - otherPoint.x,
            point.y - otherPoint.y
          );
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.lineWidth = 3 * (1 - distance / 150);
            ctx.strokeStyle = `rgba(18, 130, 162, ${0.4 * (1 - distance / 150) * Math.min(point.alpha, otherPoint.alpha)})`;
            ctx.stroke();
          }
        });

        const speed = Math.hypot(point.vx, point.vy);
        const maxSpeed = 1.8;
        if (speed > maxSpeed) {
          const scale = maxSpeed / speed;
          point.vx *= scale;
          point.vy *= scale;
        }

        point.vx += (Math.random() - 0.5) * 0.01;
        point.vy += (Math.random() - 0.5) * 0.01;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (y >= 0 && y <= sectionHeight) {
        mouseRef.current = { x, y, radius: 250 };
      } else {
        mouseRef.current = { x: -1000, y: -1000, radius: 250 };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      if (y >= 0 && y <= sectionHeight) {
        mouseRef.current = { x, y, radius: 200 };
      } else {
        mouseRef.current = { x: -1000, y: -1000, radius: 200 };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, radius: 250 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sectionHeight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full pointer-events-none"
      style={{ 
        opacity,
        height: `${sectionHeight}px`,
        zIndex: 0
      }}
    />
  );
};

export default SectionParticles;