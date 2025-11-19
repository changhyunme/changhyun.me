import { create } from "zustand";

const useCalculatorStore = create((set) => ({
    item: {
        type : "website",
        pages : "light",
        stack : 'light',
        support : "s1y"
    },
    setItem: (updater) =>
        set((state) => ({
            item: typeof updater === "function" ? updater(state.item) : updater,
        })),
}));

export default useCalculatorStore;