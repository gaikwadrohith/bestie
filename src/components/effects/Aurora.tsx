import { useThemeStore } from '@/store';
import { getDeviceTier } from '@/utils';
import type { AuroraOrb } from '@/types';

// Smaller orbs on mobile = less GPU blur work
const DAY_ORBS: AuroraOrb[] = [
  { color:'#ffb3c6', size:420, x:'5%',  y:'8%',  dx:'50px',  dy:'-40px', ds:'1.1',  dr:'15deg',  dur:'16s', delay:'0s'   },
  { color:'#ffd6e7', size:340, x:'62%', y:'52%', dx:'-35px', dy:'28px',  ds:'1.06', dr:'-12deg', dur:'13s', delay:'-5s'  },
  { color:'#ffe5b4', size:480, x:'28%', y:'68%', dx:'28px',  dy:'-35px', ds:'1.14', dr:'8deg',   dur:'19s', delay:'-10s' },
];

const NIGHT_ORBS: AuroraOrb[] = [
  { color:'rgba(88,28,135,0.75)',  size:420, x:'5%',  y:'8%',  dx:'50px',  dy:'-40px', ds:'1.1',  dr:'15deg',  dur:'16s', delay:'0s'   },
  { color:'rgba(126,34,206,0.55)', size:340, x:'62%', y:'52%', dx:'-35px', dy:'28px',  ds:'1.06', dr:'-12deg', dur:'13s', delay:'-5s'  },
  { color:'rgba(30,8,80,0.85)',    size:480, x:'28%', y:'68%', dx:'28px',  dy:'-35px', ds:'1.14', dr:'8deg',   dur:'19s', delay:'-10s' },
];

export function Aurora() {
  const { theme } = useThemeStore();
  const tier  = getDeviceTier();
  const allOrbs = theme === 'dark' ? NIGHT_ORBS : DAY_ORBS;
  // Low-end devices: only 1 orb to avoid GPU overload
  const orbs = tier === 'low' ? allOrbs.slice(0, 1) : tier === 'mid' ? allOrbs.slice(0, 2) : allOrbs;
  // Reduce blur on mobile = massive GPU win
  const blurPx = tier === 'high' ? 80 : tier === 'mid' ? 60 : 40;

  return (
    <div
      aria-hidden="true"
      style={{
        position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden',
        // contain prevents aurora from affecting layout of other layers
        contain:'strict',
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: orb.color,
            width:  orb.size,
            height: orb.size,
            left:   orb.x,
            top:    orb.y,
            filter: `blur(${blurPx}px)`,
            opacity: 0.32,
            willChange: 'transform',
            animation: `aurora-drift ${orb.dur} ${orb.delay} linear infinite alternate`,
            // @ts-ignore
            '--dx': orb.dx, '--dy': orb.dy, '--ds': orb.ds, '--dr': orb.dr,
          }}
        />
      ))}
    </div>
  );
}
