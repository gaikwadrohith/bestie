import { useCursor } from '@/hooks/useCursor';

export function CustomCursor() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:'fixed', width:14, height:14, borderRadius:'50%',
          background:'var(--accent)', opacity:.88, pointerEvents:'none',
          zIndex:99999, transform:'translate(-50%,-50%)',
          mixBlendMode:'difference', transition:'width .15s,height .15s',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:'fixed', width:38, height:38, borderRadius:'50%',
          border:'1.5px solid var(--accent)', opacity:.42, pointerEvents:'none',
          zIndex:99998, transform:'translate(-50%,-50%)',
          transition:'all .35s cubic-bezier(.25,.46,.45,.94)',
        }}
      />
    </>
  );
}
