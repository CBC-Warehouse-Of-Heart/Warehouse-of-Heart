import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  isPlaying: boolean;
  toggle: () => void;
};

export const useSoundStore = create(
  persist<State>(
    (set) => ({
      isPlaying: true,
      toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
    }),
    {
      name: "sound",
    },
  ),
);
