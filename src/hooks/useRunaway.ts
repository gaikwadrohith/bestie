import { useEffect, useRef } from 'react';
import { useSceneStore } from '@/store';

export function useRunaway(btnRef: React.RefObject<HTMLButtonElement | null>) {
  const { runaway, setNoPos } = useSceneStore();
  const isMoving = useRef(false);

  // Set safe initial position the moment runaway activates
  useEffect(() => {
    if (!runaway) return;

    const pad  = 24;
    const btnW = btnRef.current?.offsetWidth  || 110;
    const btnH = btnRef.current?.offsetHeight || 44;

    setNoPos({
      left: pad + Math.random() * (window.innerWidth  - btnW - pad * 2),
      top:  pad + Math.random() * (window.innerHeight - btnH - pad * 2),
    });
  }, [runaway]);

  useEffect(() => {
    if (!runaway) return;

    const onMove = (e: MouseEvent) => {
      if (isMoving.current) return;

      const btn = btnRef.current;
      if (!btn) return;

      const r    = btn.getBoundingClientRect();
      const dist = Math.hypot(
        e.clientX - (r.left + r.width  / 2),
        e.clientY - (r.top  + r.height / 2)
      );

      if (dist < 140) {
        isMoving.current = true;

        const pad  = 24;
        const btnW = btn.offsetWidth  || 110;
        const btnH = btn.offsetHeight || 44;

        const maxX = window.innerWidth  - btnW - pad;
        const maxY = window.innerHeight - btnH - pad;

        let left: number;
        let top: number;
        let attempts = 0;

        // Pick a spot far from cursor
        do {
          left = pad + Math.random() * (maxX - pad);
          top  = pad + Math.random() * (maxY - pad);
          attempts++;
        } while (
          attempts < 15 &&
          Math.hypot(e.clientX - left, e.clientY - top) < 180
        );

        setNoPos({ left, top });

        setTimeout(() => { isMoving.current = false; }, 500);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [runaway]);
}