import { create } from "zustand";

type SoundState = {
  sound: boolean;
};

type SoundAction = {
  updateSound: (sound: SoundState["sound"]) => void;
};

export const useSoundStore = create<SoundState & SoundAction>((set) => ({
  sound: true,
  updateSound: (sound: boolean) =>
    set(() => ({
      sound: sound,
    })),
}));
