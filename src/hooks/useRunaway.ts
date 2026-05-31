import { useEffect, useRef } from 'react';
import { useSceneStore } from '@/store';

export function useRunaway(btnRef: React.RefObject<HTMLButtonElement | null>) {
  const { runaway, setNoPos } = useSceneStore();
  const isMoving = useRef(false);

  useEffect(() => {
    if (!runaway) return;

    const onMove = (e: MouseEvent) => {
      const btn = btnRef.current;
      if (!btn || isMoving.current) return;

      const r    = btn.getBoundingClientRect();
      const dist = Math.hypot(
        e.clientX - (r.left + r.width  / 2),
        e.clientY - (r.top  + r.height / 2)
      );

      if (dist < 120) {
        isMoving.current = true;
        const pad = 18;
        const maxX = window.innerWidth  - (btn.offsetWidth  || 130) - pad * 2;
        const maxY = window.innerHeight - (btn.offsetHeight || 46)  - pad * 2;
        setNoPos({
          left: Math.random() * maxX + pad,
          top:  Math.random() * maxY + pad,
        });
        setTimeout(() => { isMoving.current = false; }, 460);
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [runaway, btnRef, setNoPos]);
}
