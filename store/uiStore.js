import { create } from 'zustand';

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

function applyTheme(lightmode) {
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

  const mode = lightmode ? 'light' : null;
  colorKeys.forEach((key) => {
    if (mode) {
      root.style.setProperty(key, `var(${key}-light)`);
    } else {
      root.style.removeProperty(key);
    }
  });
}

const useStore = create((set) => ({
  breitbild: false,
  toggleBreitbild: () => set((state) => ({ breitbild: !state.breitbild })),

  lightmode: false, // false = dark

  toggleLightmode: () => set((state) => {
    const next = !state.lightmode;
    applyTheme(next);
    return { lightmode: next };
  }),

  // ✅ 이거 추가: 외부에서 명시적으로 세팅할 때 사용
  setLightmode: (val) => {
    applyTheme(val);
    set({ lightmode: val });
  },
}));

export default useStore;
