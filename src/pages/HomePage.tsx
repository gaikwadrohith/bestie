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

  // Sync saved theme to DOM on mount
  useEffect(() => {
    set(theme);
  }, []);

  return (
    <div
      data-theme={theme}
      style={{
        height:'100dvh', display:'flex', flexDirection:'column',
        background:'var(--bg)', position:'relative', overflow:'hidden',
      }}
    >
      <LoadingScreen />

      {/* Layered visual effects */}
      <Aurora />
      <div aria-hidden="true" style={{
        position:'fixed', inset:0, zIndex:1, pointerEvents:'none', opacity:.35,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E")`,
      }} />
      <FloatingEmojis />
      <CustomCursor />

      {/* Layout */}
      <Navbar />

      <main style={{ flex:1, minHeight:0 }}>
        <SceneCard />
      </main>

      <Footer />
    </div>
  );
}
