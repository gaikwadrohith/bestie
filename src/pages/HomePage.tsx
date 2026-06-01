import { useEffect } from 'react';
import { useThemeStore } from '@/store';
import { Aurora }          from '@/components/effects/Aurora';
import { FloatingEmojis }  from '@/components/effects/FloatingEmojis';
import { CustomCursor }    from '@/components/effects/CustomCursor';
import { LoadingScreen }   from '@/components/scene/LoadingScreen';
import { Navbar }          from '@/components/layout/Navbar';
import { SceneCard }       from '@/components/scene/SceneCard';
import { Footer }          from '@/components/layout/Footer';

export default function HomePage() {
  const { theme, set } = useThemeStore();

  useEffect(() => {
    // Sync persisted theme to <html data-theme>
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, set]);

  return (
    <div
      data-theme={theme}
      style={{
        height:'100dvh', display:'flex', flexDirection:'column',
        background:'var(--bg)', position:'relative', overflow:'hidden',
      }}
    >
      <LoadingScreen />

      {/* Background layers — z-index 0 */}
      <Aurora />

      {/* Noise texture — cheapest effect, SVG data URI */}
      <div
        aria-hidden="true"
        style={{
          position:'fixed', inset:0, zIndex:1, pointerEvents:'none', opacity:.3,
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E")`,
          // Use contain so noise layer doesn't affect layout
          contain:'strict',
        }}
      />

      <FloatingEmojis />
      <CustomCursor />

      {/* App layout */}
      <Navbar />
      <main style={{ flex:1, minHeight:0, display:'flex', flexDirection:'column' }}>
        <SceneCard />
      </main>
      <Footer />
    </div>
  );
}
