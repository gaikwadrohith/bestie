import { useCursor } from '@/hooks/useCursor';
import { isTouchDevice } from '@/utils';

export function CustomCursor() {
  const { dotRef, ringRef } = useCursor();

  // Don't render cursor DOM at all on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:'fixed', width:12, height:12, borderRadius:'50%',
          background:'var(--accent)', opacity:.85, pointerEvents:'none',
          zIndex:99999, transform:'translate(-50%,-50%)',
          mixBlendMode:'difference',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:'fixed', width:36, height:36, borderRadius:'50%',
          border:'1.5px solid var(--accent)', opacity:.4, pointerEvents:'none',
          zIndex:99998, transform:'translate(-50%,-50%)',
        }}
      />
    </>
  );
}
