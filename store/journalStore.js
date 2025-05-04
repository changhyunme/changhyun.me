// store/journalStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  sortOrderByTitle: "desc",
  setSortOrderByTitle: (order) => set({ sortOrderByTitle: order }),

  sortOrderByDate: "desc", // 최신순
  setSortOrderByDate: (order) => set({ sortOrderByDate: order }),
}));

export default useStore;
