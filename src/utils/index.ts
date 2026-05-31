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
