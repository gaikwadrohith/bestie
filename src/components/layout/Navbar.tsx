import { motion } from 'framer-motion';
import { Sun, Moon, Play, Pause } from 'lucide-react';
import { useThemeStore } from '@/store';
import { useMusic } from '@/hooks/useMusic';
import { LanguageSelector } from '@/components/ui/LanguageSelector';

export function Navbar() {
  const { theme, toggle } = useThemeStore();
  const { playing, toggle: toggleMusic } = useMusic();
  const isDark = theme === 'dark';

  const iconBtnStyle: React.CSSProperties = {
    width:34, height:34, borderRadius:'50%',
    display:'flex', alignItems:'center', justifyContent:'center',
    background:'var(--toggle-bg)', border:'1px solid var(--divider)',
    cursor:'none', backdropFilter:'blur(8px)',
    transition:'all .22s ease',
  };

  return (
    <motion.nav
      initial={{ opacity:0, y:-16 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:.65, ease:[.16,1,.3,1] }}
      style={{
        flexShrink:0, display:'flex', alignItems:'center',
        justifyContent:'space-between', padding:'.6rem 1.25rem',
        background:'var(--nav-bg)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid var(--divider)', position:'relative', zIndex:10,
      }}
    >
      {/* Logo */}
      <div style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
        <div style={{ position:'relative' }}>
          <img
            src="/photos/bro.png"
            alt="BFF"
            style={{
              width:36, height:36, borderRadius:'50%', objectFit:'cover',
              border:'2px solid var(--accent)',
              boxShadow:'0 0 14px var(--glow)',
            }}
          />
          <span style={{ position:'absolute', bottom:-2, right:-2, fontSize:'.75rem' }}>💫</span>
        </div>
        <span style={{
          fontFamily:"'Cormorant Garamond', serif", fontWeight:600,
          fontSize:'1rem', color:'var(--text-h)', letterSpacing:'.04em',
          whiteSpace:'nowrap',
        }}>
          Best Friends Forever
        </span>
      </div>

      {/* Controls */}
      <div style={{ display:'flex', alignItems:'center', gap:'.45rem' }}>
        {/* Music */}
        <motion.button
          whileHover={{ scale:1.1, borderColor:'var(--accent)' }}
          whileTap={{ scale:.95 }}
          onClick={toggleMusic}
          aria-label={playing ? 'Pause music' : 'Play music'}
          style={{
            ...iconBtnStyle,
            boxShadow: playing ? '0 0 12px var(--glow)' : 'none',
          }}
        >
          {playing
            ? <Pause size={15} strokeWidth={2.5} color="var(--accent)" />
            : <Play  size={15} strokeWidth={2.5} color="var(--accent)" />}
        </motion.button>

        {/* Theme */}
        <motion.button
          whileHover={{ scale:1.1, rotate:12 }}
          whileTap={{ scale:.95 }}
          onClick={toggle}
          aria-label="Toggle theme"
          style={iconBtnStyle}
        >
          {isDark
            ? <Sun  size={15} strokeWidth={2} color="var(--accent)" />
            : <Moon size={15} strokeWidth={2} color="var(--accent)" />}
        </motion.button>

        <LanguageSelector />
      </div>
    </motion.nav>
  );
}
