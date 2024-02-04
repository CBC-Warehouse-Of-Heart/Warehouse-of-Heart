import { create } from "zustand";

const fadeDuration = 500;

type State = {
  isPlaying: boolean;
  currentVolume: number;
  currentSound?: string;
  toggle: () => void;
};

export const useSoundStore = create<State>((set) => ({
  currentVolume: 0.5,
  isPlaying: false,
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
