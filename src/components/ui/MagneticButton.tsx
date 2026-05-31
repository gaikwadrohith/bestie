import { useRef, useCallback, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/utils';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export function MagneticButton({ children, className, onClick, style, disabled }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) * 0.28;
    const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.28;
    btn.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
    // Spotlight coords
    const mx = ((e.clientX - rect.left) / rect.width  * 100) + '%';
    const my = ((e.clientY - rect.top)  / rect.height * 100) + '%';
    btn.style.setProperty('--mx', mx);
    btn.style.setProperty('--my', my);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={cn('cursor-none', className)}
      style={style}
    >
      {children}
    </button>
  );
}
