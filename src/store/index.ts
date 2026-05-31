import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, Language, SceneKey } from '@/types';

// ── Theme Store ──────────────────────────────────────
interface ThemeState {
  theme: Theme;
  toggle: () => void;
  set: (t: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggle: () =>
        set((s) => {
          const next = s.theme === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', next);
          return { theme: next };
        }),
      set: (t) => {
        document.documentElement.setAttribute('data-theme', t);
        set({ theme: t });
      },
    }),
    { name: 'bff-theme' }
  )
);

// ── Language Store ───────────────────────────────────
interface LangState {
  lang: Language;
  setLang: (l: Language) => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'te',
      setLang: (lang) => set({ lang }),
    }),
    { name: 'bff-lang' }
  )
);

// ── Scene Store ──────────────────────────────────────
interface SceneState {
  scene: SceneKey;
  noIndex: number;
  runaway: boolean;
  noPos: { left: number | null; top: number | null };
  setScene: (s: SceneKey) => void;
  handleYes: () => void;
  handleNo: () => void;
  setNoPos: (pos: { left: number; top: number }) => void;
  enableRunaway: () => void;
}

export const useSceneStore = create<SceneState>()((set, get) => ({
  scene: 'initial',
  noIndex: 0,
  runaway: false,
  noPos: { left: null, top: null },

  setScene: (scene) => set({ scene }),

  handleYes: () => set({ scene: 'yes' }),

  handleNo: () => {
    const { noIndex } = get();
    if (noIndex < 3) {
      set({ scene: `no${noIndex}` as SceneKey, noIndex: noIndex + 1 });
      if (noIndex + 1 >= 3) {
        setTimeout(() => get().enableRunaway(), 500);
      }
    }
  },

  setNoPos: (pos) => set({ noPos: pos }),
  enableRunaway: () => set({ runaway: true }),
}));

// ── Music Store ──────────────────────────────────────
interface MusicState {
  playing: boolean;
  toggle: () => void;
  setPlaying: (v: boolean) => void;
}

export const useMusicStore = create<MusicState>()((set) => ({
  playing: false,
  toggle: () => set((s) => ({ playing: !s.playing })),
  setPlaying: (playing) => set({ playing }),
}));
