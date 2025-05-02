import { create } from 'zustand';

export const useSectionStore = create((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));