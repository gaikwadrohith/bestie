import { useEffect, useRef } from 'react';
import { FRIENDSHIP_EMOJIS } from '@/constants';
import { rand } from '@/utils';

const COUNT = 20;

export function FloatingEmojis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elemsRef     = useRef<HTMLDivElement[]>([]);
  const timerRef     = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const moveEmoji = (el: HTMLDivElement) => {
    const x = rand(0, window.innerWidth  - 70);
    const y = rand(0, window.innerHeight - 70);
    const r = rand(-20, 20);
    const s = rand(0.88, 1.18);
    el.style.opacity   = String(rand(0.18, 0.42));
    el.style.fontSize  = rand(20, 56) + 'px';
    el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${r}deg) scale(${s})`;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < COUNT; i++) {
      const idx = i; // capture for closure
      setTimeout(() => {
        const el = document.createElement('div');
        el.style.cssText = [
          'position:fixed','left:0','top:0','pointer-events:none',
          'z-index:3','opacity:0','will-change:transform',
          'transition:transform 8s cubic-bezier(0.22,1,0.36,1),opacity 3s ease,font-size 8s ease',
        ].join(';');
        el.textContent = FRIENDSHIP_EMOJIS[Math.floor(Math.random() * FRIENDSHIP_EMOJIS.length)];
        container.appendChild(el);
        elemsRef.current.push(el);
        requestAnimationFrame(() => moveEmoji(el));
      }, idx * 130);
    }

    timerRef.current = setInterval(() => {
      elemsRef.current.forEach(moveEmoji);
    }, 5800);

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
