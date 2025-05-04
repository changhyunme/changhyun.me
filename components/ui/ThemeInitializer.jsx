'use client';

import { useEffect } from 'react';
import useStore from '@/store/uiStore';

export const applyTheme = (lightmode) => {
    const root = document.documentElement;
  
    if (lightmode) {
      root.classList.remove('dark');
      root.style.setProperty('--background', 'var(--background-light)');
      root.style.setProperty('--foreground', 'var(--foreground-light)');
    } else {
      root.classList.add('dark');
      root.style.removeProperty('--background');
      root.style.removeProperty('--foreground');
    }
  
    const colorKeys = [
      '--color-bg',
      '--color-bgSub',
      '--color-ui',
      '--color-uiSub',
      '--color-border',
      '--color-shadow',
      '--color-text',
      '--color-textSub',
      '--color-textWhite',
      '--color-textShadow',
    ];
  
    const mode = lightmode ? 'light' : null;
    colorKeys.forEach((key) => {
      if (mode) {
        root.style.setProperty(key, `var(${key}-light)`);
      } else {
        root.style.removeProperty(key);
      }
    });
  };

export default function ThemeInitializer() {
  const setLightmode = useStore((s) => s.setLightmode);

  useEffect(() => {
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    setLightmode(prefersLight);
    applyTheme(prefersLight);
  }, []);

  return null; // UI 없음
}