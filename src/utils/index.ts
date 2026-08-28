import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/** True on any touch-primary device */
export const isTouchDevice =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

/** Reduced-motion preference */
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Rough GPU tier — used to scale effect count */
export function getDeviceTier(): 'low' | 'mid' | 'high' {
  if (typeof window === 'undefined') return 'mid';
  const mem = (navigator as { deviceMemory?: number }).deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  if (mem <= 2 || cores <= 2) return 'low';
  if (mem <= 4 || cores <= 4) return 'mid';
  return 'high';
}
