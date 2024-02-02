import { create } from "zustand";

type NameStorkeState = {
  nameStorke: number[][][];
};

type NameStorkeAction = {
  updateNameStorke: (nameStorke: NameStorkeState["nameStorke"]) => void;
};

export const useNameStorkeStore = create<NameStorkeState & NameStorkeAction>(
  (set) => ({
    nameStorke: [],
    updateNameStorke: (nameStorke: number[][][]) =>
      set(() => ({ nameStorke: nameStorke })),
  }),
);
