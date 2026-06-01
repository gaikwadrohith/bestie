import { useEffect, useRef } from 'react';
import { FRIENDSHIP_EMOJIS } from '@/constants';
import { rand, getDeviceTier } from '@/utils';

export function FloatingEmojis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elemsRef     = useRef<HTMLDivElement[]>([]);
  const timerRef     = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scale count to device capability — the #1 lag fix
    const tier  = getDeviceTier();
    const count = tier === 'high' ? 14 : tier === 'mid' ? 8 : 5;
    // Longer drift = fewer CSS recalcs
    const driftMs = tier === 'high' ? 7000 : 9000;

    const moveEmoji = (el: HTMLDivElement) => {
      const x = rand(0, window.innerWidth  - 60);
      const y = rand(0, window.innerHeight - 60);
      const r = rand(-18, 18);
      const s = rand(0.9, 1.12);
      // Only touch transform + opacity — no fontSize change (avoids layout)
      el.style.opacity   = String(rand(0.15, 0.38));
      el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${r}deg) scale(${s})`;
    };

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        const fontSize = rand(20, 46); // fixed per-element, no change later
        el.style.cssText = [
          'position:fixed','left:0','top:0','pointer-events:none',
          'z-index:3','opacity:0',
          `font-size:${fontSize}px`,
          // GPU-only properties in transition
          `transition:transform ${driftMs}ms cubic-bezier(0.22,1,0.36,1),opacity 3s ease`,
          'will-change:transform',
        ].join(';');
        el.textContent = FRIENDSHIP_EMOJIS[Math.floor(Math.random() * FRIENDSHIP_EMOJIS.length)];
        container.appendChild(el);
        elemsRef.current.push(el);
        requestAnimationFrame(() => moveEmoji(el));
      }, i * 180);
    }

    // Longer interval → fewer repaints
    const interval = tier === 'high' ? 6500 : 9000;
    timerRef.current = setInterval(() => {
      elemsRef.current.forEach(moveEmoji);
    }, interval);

    return () => {
      clearInterval(timerRef.current);
      elemsRef.current.forEach((el) => el.remove());
      elemsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position:'fixed', inset:0, zIndex:3, pointerEvents:'none' }}
    />
  );
}
