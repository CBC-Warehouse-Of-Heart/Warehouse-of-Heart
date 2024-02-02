import { create } from "zustand";

type ShareYourselfWordsState = {
  words: string;
};

type ShareYourselfWordsAction = {
  updateWords: (words: ShareYourselfWordsState["words"]) => void;
};

export const useShareYourselfWordsStore = create<
  ShareYourselfWordsState & ShareYourselfWordsAction
>((set) => ({
  words: "",
  updateWords: (words: string) => set(() => ({ words: words })),
}));
