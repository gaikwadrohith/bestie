import { useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSceneStore, useLangStore } from '@/store';
import { LANGUAGE_PACKS, GIF_MAP } from '@/constants';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useRunaway } from '@/hooks/useRunaway';
import { useConfetti } from '@/components/effects/Confetti';
import { rand } from '@/utils';

// ── Sparkle decorations ──────────────────────────────
const SPARKS = [
  { top:'8%',  left:'12%',  size:10, delay:.2  },
  { top:'12%', right:'10%', size:7,  delay:.9  },
  { top:'82%', left:'9%',   size:12, delay:1.5 },
  { top:'78%', right:'12%', size:8,  delay:.5  },
  { top:'46%', left:'4%',   size:6,  delay:1.2 },
  { top:'50%', right:'4%',  size:9,  delay:1.8 },
];

function SparkleRing() {
  return (
    <>
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          animate={{ scale:[0,1,0], opacity:[0,1,0], rotate:[0,180,360] }}
          transition={{ duration:2+i*.3, delay:s.delay, repeat:Infinity, ease:'easeInOut' }}
          style={{
            position:'absolute', borderRadius:'50%',
            background:'var(--accent)', opacity:0,
            width:s.size, height:s.size,
            ...s,
            filter:'blur(1px)',
            pointerEvents:'none',
          }}
        />
      ))}
    </>
  );
}

// ── Heart burst on YES ───────────────────────────────
function burstHearts(cardEl: HTMLDivElement | null) {
  if (!cardEl) return;
  const r   = cardEl.getBoundingClientRect();
  const cx  = r.left + r.width  / 2;
  const cy  = r.top  + r.height / 2;
  const ems = ['💖','💙','🫶','✨','💫','🌸','💕','💞','🎊','🎉'];
  ems.forEach((em, i) => {
    const el = document.createElement('div');
    const angle = (i / ems.length) * 2 * Math.PI;
    const dist  = rand(80, 145);
    const bx    = Math.cos(angle) * dist;
    const by    = Math.sin(angle) * dist;
    el.textContent = em;
    el.style.cssText = [
      `position:fixed`,`left:${cx}px`,`top:${cy}px`,
      `font-size:1.5rem`,`pointer-events:none`,`z-index:200`,
      `--bx:${bx}px`,`--by:${by}px`,
      `animation:burst-out 1.2s ease-out ${i*80}ms forwards`,
    ].join(';');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500 + i * 80);
  });
}

// ── SceneCard ────────────────────────────────────────
export function SceneCard() {
  const { scene, handleYes, handleNo, runaway, noPos } = useSceneStore();
  const { lang } = useLangStore();
  const pack      = LANGUAGE_PACKS[lang];

  const noBtnRef    = useRef<HTMLButtonElement>(null);
  const cardRef     = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const { launch }  = useConfetti(canvasRef);

  useRunaway(noBtnRef);

  // Scene data
  const isYes  = scene === 'yes';
  const gifKey = scene === 'initial' ? 'initial' : scene;
  const gifSrc = GIF_MAP[gifKey] ?? GIF_MAP['initial'];

  const sceneText = (() => {
    if (isYes)                return { ...pack.scenes.yes };
    if (scene.startsWith('no')) {
      const idx = parseInt(scene.replace('no',''));
      return { ...pack.scenes.no[idx] };
    }
    return { ...pack.scenes.initial };
  })();

  const onYes = useCallback(() => {
    handleYes();
    setTimeout(() => {
      launch();
      burstHearts(cardRef.current);
    }, 420);
  }, [handleYes, launch]);

  // Apply runaway pos to btn directly
  useEffect(() => {
    const btn = noBtnRef.current;
    if (!btn || !runaway) return;
    btn.classList.add('runaway-btn');
    if (noPos.left !== null) {
      btn.style.left = noPos.left + 'px';
      btn.style.top  = noPos.top  + 'px';
    }
  }, [runaway, noPos]);

  // Font direction for RTL languages
  const isRtl   = lang === 'ur';
  const textFont = lang === 'ur'  ? "'Noto Nastaliq Urdu', serif"
                 : lang === 'te'  ? "'Noto Serif Telugu', serif"
                 : lang === 'ja'  ? "'Zen Kaku Gothic New', sans-serif"
                 : "'Cormorant Garamond', serif";

  return (
    <>
      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:50 }}
      />

      <div style={{ flex:1, minHeight:0, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', position:'relative', zIndex:5 }}>

        {/* Glow halo */}
        <div aria-hidden="true" style={{
          position:'absolute', width:400, height:400, borderRadius:'50%',
          background:'radial-gradient(circle,var(--glow) 0%,transparent 70%)',
          opacity:.28, filter:'blur(48px)', pointerEvents:'none',
        }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={scene + lang}
            ref={cardRef}
            initial={{ opacity:0, y:16, scale:.97 }}
            animate={{ opacity:1, y:0,  scale:1  }}
            exit={{    opacity:0, y:-12, scale:.98 }}
            transition={{ duration:.38, ease:[.16,1,.3,1] }}
            style={{
              position:'relative', width:'100%', maxWidth:440,
              background:'var(--card-bg)',
              backdropFilter:'blur(28px) saturate(160%)',
              borderRadius:28, padding:'2rem 2rem 1.75rem',
              boxShadow:'var(--shadow-card)', textAlign:'center',
            }}
          >
            {/* Animated conic border */}
            <div className="card-border-anim" />

            <SparkleRing />

            {/* GIF */}
            <motion.div
              initial={{ opacity:0, scale:.9 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay:.1, duration:.45, ease:'backOut' }}
              style={{
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                width:164, height:164, borderRadius:20, overflow:'hidden',
                background:'linear-gradient(135deg,var(--accent),var(--accent2))',
                padding:3, marginBottom:'1.25rem',
                boxShadow:'0 0 32px var(--glow), 0 0 60px var(--glow2)',
                ...(isYes ? { animation:'heartbeat 1.4s ease-in-out infinite' } : {}),
              }}
            >
              <img
                src={gifSrc}
                alt="reaction"
                style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:17 }}
                loading="lazy"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0  }}
              transition={{ delay:.15, duration:.45 }}
              style={{
                fontFamily: textFont,
                fontWeight:700, fontStyle: isRtl ? 'normal' : 'italic',
                color:'var(--text-h)', lineHeight:1.25,
                fontSize:'clamp(1.3rem,5vw,1.75rem)',
                marginBottom:'.6rem',
                direction: isRtl ? 'rtl' : 'ltr',
              }}
            >
              {sceneText.heading}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0  }}
              transition={{ delay:.22, duration:.45 }}
              style={{
                fontFamily:"'Dancing Script', cursive",
                fontWeight:500, color:'var(--text-soft)',
                fontSize:'clamp(.95rem,3.5vw,1.1rem)',
                lineHeight:1.5, marginBottom:'1.5rem',
                direction: isRtl ? 'rtl' : 'ltr',
              }}
            >
              {sceneText.sub}
            </motion.p>

            {/* Action area */}
            {isYes ? (
              <motion.div
                initial={{ opacity:0, scale:.9 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ delay:.3, duration:.5, ease:'backOut' }}
              >
                <p className="shimmer-text" style={{
                  fontFamily:"'Cormorant Garamond', serif",
                  fontSize:'1.25rem', fontWeight:700, fontStyle:'italic',
                }}>
                  {pack.celebrate}
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity:0, y:8 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:.3, duration:.4 }}
                style={{ display:'flex', justifyContent:'center', gap:'.75rem', flexWrap:'wrap' }}
              >
                {/* YES button */}
                <MagneticButton
                  onClick={onYes}
                  className="glow-pulse"
                  style={{
                    padding:'.7rem 1.8rem', borderRadius:99, border:'none',
                    background:'var(--btn-yes)', color:'#fff',
                    fontFamily:"'Poppins',sans-serif", fontWeight:600,
                    fontSize:'.88rem', letterSpacing:'.02em',
                    boxShadow:'var(--shadow-btn)',
                    position:'relative', overflow:'hidden',
                  }}
                >
                  {pack.btnYes}
                </MagneticButton>

                {/* NO button */}
                <button
                  ref={noBtnRef}
                  onClick={!runaway ? handleNo : undefined}
                  style={{
                    padding:'.7rem 1.6rem', borderRadius:99,
                    background:'transparent', color:'var(--btn-no-col)',
                    border:'1.5px solid var(--btn-no-brd)',
                    fontFamily:"'Poppins',sans-serif", fontWeight:500,
                    fontSize:'.88rem', cursor: runaway ? 'default' : 'none',
                    transition: runaway ? 'none' : 'opacity .22s',
                  }}
                  onMouseEnter={(e) => { if (!runaway)(e.currentTarget as HTMLButtonElement).style.opacity='.7'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity='1'; }}
                >
                  {pack.btnNo}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
