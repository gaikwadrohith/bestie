import { motion } from 'framer-motion';
import { Sun, Moon, Play, Pause } from 'lucide-react';
import { useThemeStore } from '@/store';
import { useMusic } from '@/hooks/useMusic';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { isTouchDevice } from '@/utils';

export function Navbar() {
  const { theme, toggle } = useThemeStore();
  const { playing, toggle: toggleMusic } = useMusic();
  const isDark = theme === 'dark';

  const iconBtnStyle: React.CSSProperties = {
    width:34, height:34, borderRadius:'50%',
    display:'flex', alignItems:'center', justifyContent:'center',
    background:'var(--toggle-bg)', border:'1px solid var(--divider)',
    cursor: isTouchDevice ? 'pointer' : 'none',
    backdropFilter:'blur(8px)',
    flexShrink:0, touchAction:'manipulation',
  };

  return (
    <motion.nav
      initial={{ opacity:0, y:-14 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:.55, ease:[.16,1,.3,1] }}
      style={{
        flexShrink:0, display:'flex', alignItems:'center',
        justifyContent:'space-between',
        padding:'.55rem clamp(.75rem,3vw,1.25rem)',
        background:'var(--nav-bg)', backdropFilter:'blur(16px)',
        borderBottom:'1px solid var(--divider)',
        position:'relative', zIndex:10,
      }}
    >
      {/* Logo */}
      <div style={{ display:'flex', alignItems:'center', gap:'.55rem', minWidth:0 }}>
        <div style={{ position:'relative', flexShrink:0 }}>
          <img
            src="/photos/bro.png"
            alt="Rohit"
            width={34} height={34}
            style={{
              borderRadius:'50%', objectFit:'cover',
              border:'2px solid var(--accent)',
              boxShadow:'0 0 12px var(--glow)',
              display:'block',
            }}
          />
          <span style={{ position:'absolute', bottom:-1, right:-1, fontSize:'.65rem', lineHeight:1 }}>💫</span>
        </div>
        <span className="nav-title" style={{
          fontFamily:"'Cormorant Garamond', serif", fontWeight:600,
          fontSize:'clamp(.85rem,2.5vw,1rem)', color:'var(--text-h)',
          letterSpacing:'.03em', whiteSpace:'nowrap', overflow:'hidden',
          textOverflow:'ellipsis',
        }}>
          ROBLOX BESTFRIEND — ROHIT &amp; SHAIMA (SUKI)
        </span>
      </div>

      {/* Controls */}
      <div style={{ display:'flex', alignItems:'center', gap:'.4rem', flexShrink:0 }}>
        <button
          onClick={toggleMusic}
          aria-label={playing ? 'Pause music' : 'Play music'}
          style={{ ...iconBtnStyle, boxShadow: playing ? '0 0 10px var(--glow)' : 'none' }}
        >
          {playing
            ? <Pause size={14} strokeWidth={2.5} color="var(--accent)" />
            : <Play  size={14} strokeWidth={2.5} color="var(--accent)" />}
        </button>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          style={iconBtnStyle}
        >
          {isDark
            ? <Sun  size={14} strokeWidth={2} color="var(--accent)" />
            : <Moon size={14} strokeWidth={2} color="var(--accent)" />}
        </button>

        <LanguageSelector />
      </div>
    </motion.nav>
  );
}
