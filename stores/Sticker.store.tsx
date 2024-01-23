import { stickerItems } from "@/components/ui/stickerItems";
import { create } from "zustand";

type StickerState = {
  stickerId: number;
  stickerPath: string;
};

type StickerAction = {
  updateSticker: (stickerId: StickerState["stickerId"]) => void;
};

export const useStickerStore = create<StickerState & StickerAction>((set) => ({
  stickerId: 1,
  stickerPath: "",
  updateSticker: (stickerId) =>
    set(() => ({
      stickerId: stickerId,
      stickerPath: stickerItems.find((i) => i.id === stickerId).path,
    })),
}));
