import { useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSceneStore, useLangStore } from '@/store';
import { LANGUAGE_PACKS, GIF_MAP } from '@/constants';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useRunaway } from '@/hooks/useRunaway';
import { useConfetti } from '@/components/effects/Confetti';
import { rand, isTouchDevice, getDeviceTier } from '@/utils';

// ── CSS sparkles (no Framer Motion infinite loops) ────
function SparkleRing() {
  const tier = getDeviceTier();
  if (tier === 'low') return null;

  const sparks = [
    { top: '10%', left: '8%',   size: 8,  delay: '.2s',  dur: '2.4s' },
    { top: '14%', right: '9%',  size: 6,  delay: '1.1s', dur: '2.8s' },
    { top: '80%', left: '10%',  size: 10, delay: '1.6s', dur: '2.2s' },
    { top: '76%', right: '11%', size: 7,  delay: '.5s',  dur: '3s'   },
  ];

  return (
    <>
      {sparks.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'var(--accent)',
            width: s.size,
            height: s.size,
            top: s.top,
            ...('right' in s ? { right: s.right } : { left: 'left' in s ? s.left : undefined }),
            pointerEvents: 'none',
            animation: `sparkle-pulse ${s.dur} ${s.delay} ease-in-out infinite`,
            filter: 'blur(1px)',
            opacity: 0,
          }}
        />
      ))}
    </>
  );
}

// ── Heart burst ───────────────────────────────────────
function burstHearts(cardEl: HTMLDivElement | null) {
  if (!cardEl) return;
  const r  = cardEl.getBoundingClientRect();
  const cx = r.left + r.width  / 2;
  const cy = r.top  + r.height / 2;
  const ems = ['💖', '💙', '🫶', '✨', '💫', '🌸', '💕', '💞', '🎊', '🎉'];

  ems.forEach((em, i) => {
    const el    = document.createElement('div');
    const angle = (i / ems.length) * 2 * Math.PI;
    const dist  = rand(80, 140);
    const bx    = Math.cos(angle) * dist;
    const by    = Math.sin(angle) * dist;
    el.textContent = em;
    el.style.cssText = [
      'position:fixed',
      `left:${cx}px`,
      `top:${cy}px`,
      'font-size:1.4rem',
      'pointer-events:none',
      'z-index:200',
      `--bx:${bx}px`,
      `--by:${by}px`,
      `animation:burst-out 1.2s ease-out ${i * 75}ms forwards`,
    ].join(';');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1400 + i * 75);
  });
}

// ── RunawayButton rendered via Portal on document.body ─
// This is the KEY fix — portal escapes Framer Motion's
// transform containing block so position:fixed works correctly
function RunawayNoButton({
  btnRef,
  noPos,
  label,
}: {
  btnRef: React.RefObject<HTMLButtonElement | null>;
  noPos: { left: number | null; top: number | null };
  label: string;
}) {
  if (noPos.left === null || noPos.top === null) return null;

  return createPortal(
    <button
      ref={btnRef}
      style={{
        position: 'fixed',
        left: noPos.left,
        top: noPos.top,
        padding: '.65rem 1.5rem',
        borderRadius: 99,
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: 'var(--btn-no-col)',
        border: '1.5px solid var(--btn-no-brd)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(.82rem, 2.5vw, .9rem)',
        cursor: 'default',
        zIndex: 9999,
        transition: 'left .42s cubic-bezier(.34,1.56,.64,1), top .42s cubic-bezier(.34,1.56,.64,1)',
        pointerEvents: 'none', // can't click it when it's running away!
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>,
    document.body
  );
}

// ── SceneCard ─────────────────────────────────────────
export function SceneCard() {
  const { scene, handleYes, handleNo, runaway, noPos } = useSceneStore();
  const { lang } = useLangStore();
  const pack      = LANGUAGE_PACKS[lang];
  const tier      = getDeviceTier();
  const isTouch   = isTouchDevice;

  const noBtnRef  = useRef<HTMLButtonElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { launch } = useConfetti(canvasRef);

  useRunaway(noBtnRef);

  const isYes  = scene === 'yes';
  const gifKey = scene === 'initial' ? 'initial' : scene;
  const gifSrc = GIF_MAP[gifKey] ?? GIF_MAP['initial'];

  const sceneText = (() => {
    if (isYes) return pack.scenes.yes;
    if (scene.startsWith('no')) {
      const idx = parseInt(scene.replace('no', ''));
      return pack.scenes.no[idx];
    }
    return pack.scenes.initial;
  })();

  const onYes = useCallback(() => {
    handleYes();
    setTimeout(() => {
      launch();
      burstHearts(cardRef.current);
    }, 380);
  }, [handleYes, launch]);

  const isRtl    = lang === 'ur';
  const headFont = lang === 'ur' ? "'Noto Nastaliq Urdu', serif"
                 : lang === 'te' ? "'Noto Serif Telugu', serif"
                 : lang === 'ja' ? "'Zen Kaku Gothic New', sans-serif"
                 : "'Cormorant Garamond', serif";

  const blurVal = tier === 'high' ? 'blur(22px) saturate(150%)'
                : tier === 'mid'  ? 'blur(10px)'
                : 'blur(4px)';

  const cardAnim = tier === 'low'
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: .25 } }
    : {
        initial:    { opacity: 0, y: 14, scale: .97 },
        animate:    { opacity: 1, y: 0,  scale: 1   },
        exit:       { opacity: 0, y: -10, scale: .98 },
        transition: { duration: .36, ease: [.16, 1, .3, 1] as [number, number, number, number] },
      };

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}
      />

      {/* Runaway button lives on document.body via portal */}
      {runaway && (
        <RunawayNoButton
          btnRef={noBtnRef}
          noPos={noPos}
          label={pack.btnNo}
        />
      )}

      <div style={{
        flex: 1, minHeight: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: 'clamp(.75rem,3vw,1.5rem)',
        position: 'relative', zIndex: 5, overflowY: 'auto',
      }}>

        <div aria-hidden="true" style={{
          position: 'absolute',
          width: 'min(360px,90vw)', height: 'min(360px,90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          opacity: .2, filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={scene + lang}
            ref={cardRef}
            {...cardAnim}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'min(440px, calc(100vw - 2rem))',
              background: 'var(--card-bg)',
              backdropFilter: blurVal,
              WebkitBackdropFilter: blurVal,
              borderRadius: 'clamp(18px,4vw,28px)',
              padding: 'clamp(1.25rem,4vw,2rem)',
              boxShadow: 'var(--shadow-card)',
              textAlign: 'center',
              contain: 'layout style',
            }}
          >
            {tier !== 'low' && <div className="card-border-anim" />}
            <SparkleRing />

            {/* GIF */}
            <motion.div
              initial={{ opacity: 0, scale: .88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: .08, duration: .4, ease: 'backOut' }}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 'clamp(130px,35vw,160px)', height: 'clamp(130px,35vw,160px)',
                borderRadius: 'clamp(14px,3vw,20px)', overflow: 'hidden',
                background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
                padding: 3, marginBottom: 'clamp(.9rem,2.5vw,1.25rem)',
                boxShadow: '0 0 24px var(--glow)',
                ...(isYes ? { animation: 'heartbeat 1.4s ease-in-out infinite' } : {}),
                willChange: 'transform',
              }}
            >
              <img
                src={gifSrc}
                alt="reaction gif"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(11px,2.5vw,17px)', display: 'block' }}
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .14, duration: .4 }}
              style={{
                fontFamily: headFont,
                fontWeight: 700, fontStyle: isRtl ? 'normal' : 'italic',
                color: 'var(--text-h)', lineHeight: 1.25,
                fontSize: 'clamp(1.2rem,4.5vw,1.7rem)',
                marginBottom: '.55rem',
                direction: isRtl ? 'rtl' : 'ltr',
                overflowWrap: 'break-word',
              }}
            >
              {sceneText.heading}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2, duration: .4 }}
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 500, color: 'var(--text-soft)',
                fontSize: 'clamp(.88rem,3vw,1.08rem)',
                lineHeight: 1.55, marginBottom: 'clamp(1rem,3vw,1.5rem)',
                direction: isRtl ? 'rtl' : 'ltr',
                overflowWrap: 'break-word',
              }}
            >
              {sceneText.sub}
            </motion.p>

            {/* Buttons */}
            {isYes ? (
              <motion.p
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: .28, duration: .45, ease: 'backOut' }}
                className="shimmer-text"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1rem,3.5vw,1.22rem)',
                  fontWeight: 700, fontStyle: 'italic',
                }}
              >
                {pack.celebrate}
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .26, duration: .38 }}
                style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(.5rem,2vw,.75rem)', flexWrap: 'wrap' }}
              >
                {/* YES */}
                {isTouch ? (
                  <button
                    onClick={onYes}
                    className="glow-pulse yes-btn"
                    style={{
                      padding: 'clamp(.6rem,2vw,.72rem) clamp(1.2rem,4vw,1.8rem)',
                      borderRadius: 99, border: 'none',
                      background: 'var(--btn-yes)', color: '#fff',
                      fontFamily: "'Poppins',sans-serif", fontWeight: 600,
                      fontSize: 'clamp(.82rem,2.5vw,.9rem)',
                      letterSpacing: '.02em', boxShadow: 'var(--shadow-btn)',
                      cursor: 'pointer', touchAction: 'manipulation',
                    }}
                  >
                    {pack.btnYes}
                  </button>
                ) : (
                  <MagneticButton
                    onClick={onYes}
                    className="glow-pulse yes-btn"
                    style={{
                      padding: 'clamp(.6rem,2vw,.72rem) clamp(1.2rem,4vw,1.8rem)',
                      borderRadius: 99, border: 'none',
                      background: 'var(--btn-yes)', color: '#fff',
                      fontFamily: "'Poppins',sans-serif", fontWeight: 600,
                      fontSize: 'clamp(.82rem,2.5vw,.9rem)',
                      letterSpacing: '.02em', boxShadow: 'var(--shadow-btn)',
                    }}
                  >
                    {pack.btnYes}
                  </MagneticButton>
                )}

                {/* NO — shown inline until runaway, then portal takes over */}
                {!runaway && (
                  <button
                    onClick={handleNo}
                    style={{
                      padding: 'clamp(.6rem,2vw,.72rem) clamp(1rem,3.5vw,1.6rem)',
                      borderRadius: 99, background: 'transparent',
                      color: 'var(--btn-no-col)',
                      border: '1.5px solid var(--btn-no-brd)',
                      fontFamily: "'Poppins',sans-serif", fontWeight: 500,
                      fontSize: 'clamp(.82rem,2.5vw,.9rem)',
                      cursor: 'pointer', touchAction: 'manipulation',
                    }}
                  >
                    {pack.btnNo}
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}