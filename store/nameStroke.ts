import { create } from "zustand";
import { persist } from "zustand/middleware";

type NameStrokeState = {
  nameStroke: number[][][];
};

type NameStrokeAction = {
  updateNameStroke: (nameStroke: NameStrokeState["nameStroke"]) => void;
};

export const useNameStrokeStore = create(
  persist<NameStrokeState & NameStrokeAction>(
    (set) => ({
      nameStroke: [],
      updateNameStroke: (nameStroke: number[][][]) =>
        set(() => ({ nameStroke: nameStroke })),
    }),
    {
      name: "name-stroke",
    },
  ),
);
