import { motion } from 'framer-motion';
import { useLangStore } from '@/store';
import { LANGUAGE_PACKS } from '@/constants';

export function Footer() {
  const { lang } = useLangStore();
  const footer    = LANGUAGE_PACKS[lang].footer;

  return (
    <motion.footer
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ delay:.8, duration:.6 }}
      style={{
        flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center',
        padding:'.45rem 1rem', borderTop:'1px solid var(--divider)',
        position:'relative', zIndex:5,
      }}
    >
      <p style={{
        fontSize:'.7rem', letterSpacing:'.18em',
        color:'var(--footer-text)', textTransform:'uppercase',
        fontFamily:"'Poppins', sans-serif",
      }}>
        {footer}
      </p>
    </motion.footer>
  );
}
