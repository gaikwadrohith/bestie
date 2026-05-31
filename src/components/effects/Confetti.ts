import { useCallback, useRef } from 'react';
import { rand } from '@/utils';

const COLORS = ['#e8276e','#ff8fab','#ffb347','#a855f7','#38bdf8','#fbbf24','#34d399'];

interface Piece {
  x:number;y:number;w:number;h:number;
  color:string;vx:number;vy:number;
  rot:number;vr:number;op:number;
}

function makePiece(canvasWidth: number): Piece {
  return {
    x: rand(0, canvasWidth), y: -10,
    w: rand(6, 14), h: rand(8, 18),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: rand(-3, 3), vy: rand(2, 7),
    rot: rand(0, 360), vr: rand(-6, 6),
    op: 1,
  };
}

export function useConfetti(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const rafRef = useRef<number>(0);

  const launch = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces: Piece[] = [];
    for (let i = 0; i < 130; i++) pieces.push(makePiece(canvas.width));

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (p.y > canvas.height * 0.72) p.op -= 0.022;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.op);
        ctx.fillStyle   = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 170) rafRef.current = requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    animate();
  }, [canvasRef]);

  return { launch };
}
