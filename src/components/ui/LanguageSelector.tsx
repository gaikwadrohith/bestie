import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { isTouchDevice } from '@/utils';
import { useLangStore } from '@/store';
import { LANGUAGE_PACKS, LANGUAGE_ORDER } from '@/constants';
import type { Language } from '@/types';

export function LanguageSelector() {
  const { lang, setLang } = useLangStore();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGE_PACKS[lang];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (l: Language) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} style={{ position:'relative' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="cursor-none"
        style={{
          display:'flex', alignItems:'center', gap:'.3rem',
          padding:'.28rem .6rem', borderRadius:20,
          background:'var(--toggle-bg)', border:'1px solid var(--divider)',
          fontSize:'.72rem', fontWeight:500, color:'var(--text-soft)',
          backdropFilter:'blur(8px)', transition:'all .22s',
          cursor: isTouchDevice ? 'pointer' : 'none',
        }}
      >
        <span>{current.flag}</span>
        <span>{current.code}</span>
        <ChevronDown size={11} style={{ opacity:.7 }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-6, scale:.97 }}
            animate={{ opacity:1, y:0,  scale:1 }}
            exit={{ opacity:0, y:-6, scale:.97 }}
            transition={{ duration:.18, ease:'easeOut' }}
            style={{
              position:'absolute', top:'calc(100% + .4rem)', right:0,
              background:'var(--card-bg)', backdropFilter:'blur(24px)',
              border:'1px solid var(--card-border)', borderRadius:14,
              padding:'.35rem', minWidth:165, zIndex:100,
              boxShadow:'var(--shadow-card)',
              display:'flex', flexDirection:'column', gap:'.1rem',
            }}
          >
            {LANGUAGE_ORDER.map((key) => {
              const pack = LANGUAGE_PACKS[key];
              return (
                <button
                  key={key}
                  onClick={() => select(key)}
                  className="cursor-none"
                  style={{
                    display:'flex', alignItems:'center', gap:'.5rem',
                    padding:'.38rem .65rem', borderRadius:8,
                    fontSize:'.8rem', background:'transparent',
                    border:'none', color: key === lang ? 'var(--accent)' : 'var(--text-b)',
                    fontWeight: key === lang ? 600 : 400,
                    textAlign:'left', cursor: isTouchDevice ? 'pointer' : 'none',
                    transition:'background .14s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--divider)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  <span style={{ fontSize:'1rem' }}>{pack.flag}</span>
                  <span>{pack.nativeName}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
