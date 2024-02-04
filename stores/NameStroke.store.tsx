import { create } from "zustand";

type NameStrokeState = {
  nameStroke: number[][][];
};

type NameStrokeAction = {
  updateNameStroke: (nameStroke: NameStrokeState["nameStroke"]) => void;
};

export const useNameStrokeStore = create<NameStrokeState & NameStrokeAction>(
  (set) => ({
    nameStroke: [],
    updateNameStroke: (nameStroke: number[][][]) =>
      set(() => ({ nameStroke: nameStroke })),
  }),
);
