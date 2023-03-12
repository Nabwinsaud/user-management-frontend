import { create } from "zustand";

type CountStore = {
  count: number;
  increaseCount: (count: number) => void;
  decreaseCount?: (count: number) => void;
};
export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increaseCount: () =>
    set((prev: { count: number }) => ({ count: prev.count + 1 })),
}));
