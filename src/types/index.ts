export type Theme = 'light' | 'dark';

export type Language =
  | 'en' | 'te' | 'hi' | 'mr' | 'ja' | 'ur' | 'fr' | 'es' | 'ml';

export interface SceneData {
  gif: string;
  heading: string;
  sub: string;
}

export interface LanguagePack {
  flag: string;
  code: string;
  name: string;
  nativeName: string;
  btnYes: string;
  btnNo: string;
  footer: string;
  loaderText: string;
  celebrate: string;
  scenes: {
    initial: Omit<SceneData, 'gif'>;
    yes: Omit<SceneData, 'gif'>;
    no: Omit<SceneData, 'gif'>[];
  };
}

export type SceneKey = 'initial' | 'yes' | `no${number}`;

export interface AuroraOrb {
  color: string;
  size: number;
  x: string;
  y: string;
  dx: string;
  dy: string;
  ds: string;
  dr: string;
  dur: string;
  delay: string;
}
