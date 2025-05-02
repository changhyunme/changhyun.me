import { create } from 'zustand';

const useStore = create((set) => ({
  breitbild: false,
  toggleBreitbild: () => set((state) => ({ breitbild: !state.breitbild })),
}));

export default useStore;
