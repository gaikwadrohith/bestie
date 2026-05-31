// import { useEffect , useRef } from 'react';
// import { useThemeStore } from '@/store';
// import type { AuroraOrb } from '@/types';

// const DAY_ORBS: AuroraOrb[] = [
//   { color:'#ffb3c6', size:520, x:'5%',  y:'10%', dx:'60px',  dy:'-50px', ds:'1.15', dr:'20deg',  dur:'14s', delay:'0s'  },
//   { color:'#ffd6e7', size:420, x:'65%', y:'55%', dx:'-40px', dy:'30px',  ds:'1.08', dr:'-15deg', dur:'11s', delay:'-4s' },
//   { color:'#ffe5b4', size:600, x:'30%', y:'70%', dx:'30px',  dy:'-40px', ds:'1.2',  dr:'10deg',  dur:'17s', delay:'-8s' },
//   { color:'#ffc8dd', size:350, x:'80%', y:'15%', dx:'-50px', dy:'45px',  ds:'0.9',  dr:'-20deg', dur:'9s',  delay:'-2s' },
// ];

// const NIGHT_ORBS: AuroraOrb[] = [
//   { color:'rgba(88,28,135,0.8)',  size:520, x:'5%',  y:'10%', dx:'60px',  dy:'-50px', ds:'1.15', dr:'20deg',  dur:'14s', delay:'0s'  },
//   { color:'rgba(126,34,206,0.6)', size:420, x:'65%', y:'55%', dx:'-40px', dy:'30px',  ds:'1.08', dr:'-15deg', dur:'11s', delay:'-4s' },
//   { color:'rgba(30,8,80,0.9)',    size:600, x:'30%', y:'70%', dx:'30px',  dy:'-40px', ds:'1.2',  dr:'10deg',  dur:'17s', delay:'-8s' },
//   { color:'rgba(67,20,120,0.7)',  size:350, x:'80%', y:'15%', dx:'-50px', dy:'45px',  ds:'0.9',  dr:'-20deg', dur:'9s',  delay:'-2s' },
// ];

// export function Aurora() {
//   const { theme } = useThemeStore();
//   const orbs = theme === 'dark' ? NIGHT_ORBS : DAY_ORBS;

//   return (
//     <div
//       aria-hidden="true"
//       style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}
//     >
//       {orbs.map((orb, i) => (
//         <div
//           key={i}
//           style={{
//             position: 'absolute',
//             borderRadius: '50%',
//             background: orb.color,
//             width:  orb.size,
//             height: orb.size,
//             left:   orb.x,
//             top:    orb.y,
//             filter: 'blur(90px)',
//             opacity: 0.35,
//             animation: `aurora-drift ${orb.dur} ${orb.delay} linear infinite alternate`,
//             // @ts-ignore css custom props
//             '--dx': orb.dx, '--dy': orb.dy, '--ds': orb.ds, '--dr': orb.dr,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

import React from "react";
import { useThemeStore } from "@/store";
import type { AuroraOrb } from "@/types";

const DAY_ORBS: AuroraOrb[] = [
  {
    color: "#ffb3c6",
    size: 520,
    x: "5%",
    y: "10%",
    dx: "60px",
    dy: "-50px",
    ds: "1.15",
    dr: "20deg",
    dur: "14s",
    delay: "0s",
  },
  {
    color: "#ffd6e7",
    size: 420,
    x: "65%",
    y: "55%",
    dx: "-40px",
    dy: "30px",
    ds: "1.08",
    dr: "-15deg",
    dur: "11s",
    delay: "-4s",
  },
  {
    color: "#ffe5b4",
    size: 600,
    x: "30%",
    y: "70%",
    dx: "30px",
    dy: "-40px",
    ds: "1.2",
    dr: "10deg",
    dur: "17s",
    delay: "-8s",
  },
  {
    color: "#ffc8dd",
    size: 350,
    x: "80%",
    y: "15%",
    dx: "-50px",
    dy: "45px",
    ds: "0.9",
    dr: "-20deg",
    dur: "9s",
    delay: "-2s",
  },
];

const NIGHT_ORBS: AuroraOrb[] = [
  {
    color: "rgba(88,28,135,0.8)",
    size: 520,
    x: "5%",
    y: "10%",
    dx: "60px",
    dy: "-50px",
    ds: "1.15",
    dr: "20deg",
    dur: "14s",
    delay: "0s",
  },
  {
    color: "rgba(126,34,206,0.6)",
    size: 420,
    x: "65%",
    y: "55%",
    dx: "-40px",
    dy: "30px",
    ds: "1.08",
    dr: "-15deg",
    dur: "11s",
    delay: "-4s",
  },
  {
    color: "rgba(30,8,80,0.9)",
    size: 600,
    x: "30%",
    y: "70%",
    dx: "30px",
    dy: "-40px",
    ds: "1.2",
    dr: "10deg",
    dur: "17s",
    delay: "-8s",
  },
  {
    color: "rgba(67,20,120,0.7)",
    size: 350,
    x: "80%",
    y: "15%",
    dx: "-50px",
    dy: "45px",
    ds: "0.9",
    dr: "-20deg",
    dur: "9s",
    delay: "-2s",
  },
];

export function Aurora() {
  const { theme } = useThemeStore();
  const orbs = theme === "dark" ? NIGHT_ORBS : DAY_ORBS;

  return (
    <>
      <style>
        {`
          @keyframes aurora-drift {
            from {
              transform: translate(0,0) scale(1) rotate(0deg);
            }
            to {
              transform:
                translate(var(--dx), var(--dy))
                scale(var(--ds))
                rotate(var(--dr));
            }
          }
        `}
      </style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {orbs.map((orb, i) => (
          <div
            key={i}
            style={
              {
                position: "absolute",
                borderRadius: "50%",
                background: orb.color,
                width: orb.size,
                height: orb.size,
                left: orb.x,
                top: orb.y,
                filter: "blur(90px)",
                opacity: 0.35,
                animation: `aurora-drift ${orb.dur} linear ${orb.delay} infinite alternate`,
                "--dx": orb.dx,
                "--dy": orb.dy,
                "--ds": orb.ds,
                "--dr": orb.dr,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}