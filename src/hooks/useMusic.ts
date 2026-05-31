import { useEffect, useRef } from 'react';
import { useMusicStore } from '@/store';

export function useMusic() {
  const { playing, toggle } = useMusicStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/song.mp3');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => useMusicStore.getState().setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  return { playing, toggle };
}
