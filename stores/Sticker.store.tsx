import { stickerItems } from "@/components/ui/stickerItems";
import { create } from "zustand";

type StickerState = {
  stickerId: number;
  stickerPath: string;
  stickerBgPath: string;
};

type StickerAction = {
  updateSticker: (stickerId: StickerState["stickerId"]) => void;
};

const initialState: StickerState = {
  stickerId: 1,
  stickerPath: "/img/sticker/notSelect.png",
  stickerBgPath: "/img/bg/4-16.png",
};

export const useStickerStore = create<StickerState & StickerAction>((set) => ({
  ...initialState,
  updateSticker: (stickerId: number) =>
    set(() => ({
      stickerId: stickerId,
      stickerPath: stickerItems.find((i) => i.id === stickerId)?.path,
      stickerBgPath: stickerItems.find((i) => i.id === stickerId)?.bgPath,
    })),
}));
