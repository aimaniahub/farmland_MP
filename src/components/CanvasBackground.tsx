import React, { useRef, useEffect } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(private canvasWidth: number, private canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        if (this.x < 0 || this.x > this.canvasWidth || this.y < 0 || this.y > this.canvasHeight) {
          this.x = Math.random() * this.canvasWidth;
          this.y = Math.random() * this.canvasHeight;
          this.size = Math.random() * 3 + 1;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'rgba(0, 104, 55, 0.1)';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvasWidth, canvasHeight));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        particle.update();
        particle.draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        init();
      }
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        resizeObserver.unobserve(parent);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.5,
      }}
    />
  );
};

export default CanvasBackground;
