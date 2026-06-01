import { useEffect, useRef } from 'react';
import { isTouchDevice } from '@/utils';

export function useCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    // Don't run cursor logic on touch devices at all
    if (isTouchDevice) {
      // Hide cursor elements if they mounted
      if (dotRef.current)  dotRef.current.style.display  = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current.cx = e.clientX;
      pos.current.cy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const animate = () => {
      // Lerp only ring — dot is snap-updated on mousemove
      pos.current.rx += (pos.current.cx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.cy - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px';
        ringRef.current.style.top  = pos.current.ry + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { dotRef, ringRef };
}
