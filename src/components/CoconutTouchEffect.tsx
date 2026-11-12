import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  rotation: number;
  vRot: number;
  life: number;
  maxLife: number;
  type: 'coconut' | 'ripple' | 'leaf';
}

export const CoconutTouchEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const spawnParticles = (x: number, y: number, count = 2) => {
      const now = performance.now();
      // Throttle spawn rate for smooth 60fps performance
      if (now - lastSpawnRef.current < 45) return;
      lastSpawnRef.current = now;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.5;
        const type: 'coconut' | 'ripple' | 'leaf' = Math.random() > 0.4 ? 'coconut' : Math.random() > 0.5 ? 'leaf' : 'ripple';
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          size: type === 'coconut' ? 14 + Math.random() * 8 : type === 'leaf' ? 10 + Math.random() * 8 : 18 + Math.random() * 16,
          vx: Math.cos(angle) * speed * 0.7,
          vy: Math.sin(angle) * speed * 0.7 - 0.4, // slight upward float
          opacity: 0.85,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.05,
          life: 0,
          maxLife: 40 + Math.random() * 25,
          type
        });
      }

      // Cap particles for performance
      if (particlesRef.current.length > 50) {
        particlesRef.current.splice(0, particlesRef.current.length - 50);
      }
    };

    // Touch Event Listeners
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticles(touch.clientX, touch.clientY, 2);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticles(touch.clientX, touch.clientY, 3);
      }
    };

    // Scroll listener: spawn gentle coconut floating particles at screen center/pointer
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      if (delta > 8) {
        const x = window.innerWidth * (0.3 + Math.random() * 0.4);
        const y = window.innerHeight * (0.3 + Math.random() * 0.4);
        spawnParticles(x, y, 1);
        lastScrollY = currentScrollY;
      }
    };

    // Pointer move listener for desktop
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && Math.random() > 0.55) {
        spawnParticles(e.clientX, e.clientY, 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.life++;

        // Fade out
        const progress = p.life / p.maxLife;
        p.opacity = Math.max(0, 0.85 * (1 - progress));

        if (p.life >= p.maxLife || p.opacity <= 0.01) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'coconut') {
          // Draw stylised organic coconut icon
          // Outer coconut husk (Chocolate Brown #573B2E)
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.85, p.size * 0.72, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#573B2E';
          ctx.fill();

          // Inner copra (Coconut Cream #EDE1D2)
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.62, p.size * 0.5, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#EDE1D2';
          ctx.fill();

          // Center coconut water (Soft Ivory / Olive Tint #68734B)
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.38, p.size * 0.3, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#CBB89D';
          ctx.fill();

          // Small natural sprout leaf atop
          ctx.beginPath();
          ctx.ellipse(p.size * 0.45, -p.size * 0.35, p.size * 0.25, p.size * 0.12, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = '#68734B';
          ctx.fill();
        } else if (p.type === 'leaf') {
          // Organic Palm Leaf Frond particle (Olive Green #68734B)
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.9, p.size * 0.35, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = '#68734B';
          ctx.fill();
        } else {
          // Subtle expanding water ripple
          const rippleRadius = p.size * (1 + progress * 0.8);
          ctx.beginPath();
          ctx.arc(0, 0, rippleRadius, 0, Math.PI * 2);
          ctx.strokeStyle = '#68734B';
          ctx.lineWidth = 1.5 * (1 - progress);
          ctx.stroke();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden="true"
    />
  );
};
