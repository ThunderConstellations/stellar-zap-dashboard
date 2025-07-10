
import React, { useEffect, useRef } from 'react';

const LightningBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars/constellation points
    const stars: Array<{ x: number; y: number; brightness: number; pulse: number }> = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random(),
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Lightning connections
    const connections: Array<{ from: number; to: number; intensity: number }> = [];
    for (let i = 0; i < 50; i++) {
      const from = Math.floor(Math.random() * stars.length);
      let to = Math.floor(Math.random() * stars.length);
      while (to === from) {
        to = Math.floor(Math.random() * stars.length);
      }
      connections.push({ from, to, intensity: Math.random() });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.016;

      // Draw constellation connections
      connections.forEach((conn, index) => {
        const fromStar = stars[conn.from];
        const toStar = stars[conn.to];
        const distance = Math.sqrt(
          Math.pow(toStar.x - fromStar.x, 2) + Math.pow(toStar.y - fromStar.y, 2)
        );

        if (distance < 300) {
          const intensity = conn.intensity * (Math.sin(time + index) * 0.5 + 0.5);
          const alpha = intensity * (1 - distance / 300) * 0.3;

          // Lightning effect
          ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`;
          ctx.lineWidth = 1 + intensity * 2;
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 10 + intensity * 20;

          ctx.beginPath();
          ctx.moveTo(fromStar.x, fromStar.y);

          // Create jagged lightning path
          const segments = 5;
          for (let i = 1; i <= segments; i++) {
            const progress = i / segments;
            const x = fromStar.x + (toStar.x - fromStar.x) * progress;
            const y = fromStar.y + (toStar.y - fromStar.y) * progress;
            const offset = (Math.sin(time * 5 + index + i) * 15) * intensity;
            
            ctx.lineTo(x + offset, y + offset * 0.5);
          }
          
          ctx.stroke();
        }
      });

      // Draw stars
      stars.forEach((star, index) => {
        const pulse = Math.sin(time * 2 + star.pulse) * 0.3 + 0.7;
        const size = (star.brightness * 2 + 1) * pulse;

        ctx.fillStyle = `rgba(255, 215, 0, ${star.brightness * pulse})`;
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = size * 3;

        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Star sparkle effect
        if (pulse > 0.9) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${(pulse - 0.9) * 10})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
          
          const sparkleSize = size * 3;
          ctx.beginPath();
          ctx.moveTo(star.x - sparkleSize, star.y);
          ctx.lineTo(star.x + sparkleSize, star.y);
          ctx.moveTo(star.x, star.y - sparkleSize);
          ctx.lineTo(star.x, star.y + sparkleSize);
          ctx.stroke();
        }
      });

      ctx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
};

export default LightningBackground;
