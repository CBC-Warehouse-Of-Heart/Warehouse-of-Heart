import { stickerItems } from "@/components/constant/stickerItems";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type StickerState = {
  stickerId: number;
  stickerPath: string;
  stickerBgStyle: string;
};

type StickerAction = {
  updateSticker: (stickerId: StickerState["stickerId"]) => void;
};

const initialState: StickerState = {
  stickerId: 1,
  stickerPath: "/img/sticker/notSelect.png",
  stickerBgStyle:
    "absolute flex h-full w-full flex-col items-center overflow-hidden bg-4-17-0 bg-cover bg-no-repeat",
};

export const useStickerStore = create(
  persist<StickerState & StickerAction>(
    (set) => ({
      ...initialState,
      updateSticker: (stickerId: number) =>
        set(() => ({
          stickerId: stickerId,
          stickerPath: stickerItems.find((i) => i.id === stickerId)?.path,
          stickerBgStyle: stickerItems.find((i) => i.id === stickerId)?.bgStyle,
        })),
    }),
    {
      name: "sticker",
    },
  ),
);
