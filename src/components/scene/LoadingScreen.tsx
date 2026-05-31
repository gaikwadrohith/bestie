import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLangStore } from '@/store';
import { LANGUAGE_PACKS } from '@/constants';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const { lang } = useLangStore();
  const loaderText = LANGUAGE_PACKS[lang].loaderText;

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity:0, scale:1.06 }}
          transition={{ duration:.75, ease:[.4,0,.2,1] }}
          style={{
            position:'fixed', inset:0, zIndex:9999,
            background:'var(--bg)',
            display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', gap:'1.2rem',
          }}
        >
          {/* Pulsing heart */}
          <motion.div
            animate={{ scale:[.9,1.1,.9] }}
            transition={{ duration:1.2, repeat:Infinity, ease:'easeInOut' }}
          >
            <svg width="72" height="72" viewBox="0 0 60 60" fill="none">
              <path
                d="M30 52s-22-14.5-22-28a12 12 0 0124 0 12 12 0 0124 0C56 37.5 30 52 30 52z"
                fill="var(--accent)"
                opacity=".9"
              />
            </svg>
          </motion.div>

          <motion.p
            animate={{ opacity:[.45,1,.45] }}
            transition={{ duration:1.6, repeat:Infinity, ease:'easeInOut' }}
            style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontStyle:'italic', fontSize:'1.1rem',
              color:'var(--text-soft)', letterSpacing:'.1em',
            }}
          >
            {loaderText}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX:0, originX:0 }}
            animate={{ scaleX:1 }}
            transition={{ duration:1.8, ease:'linear' }}
            style={{
              width:120, height:2, borderRadius:1,
              background:'var(--accent)', opacity:.6,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
