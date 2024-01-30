import { useStickerStore } from "@/stores/sticker.store";
import Image from "next/image";
import { stickerItems } from "./stickerItems";

type Sticker = {
  id: number;
  path: string;
  bgPath: string;
};

const StickerSelector = () => {
  const stickerId = useStickerStore((state) => state.stickerId);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  return (
    <div className="z-2 absolute mt-[154px] flex h-[560px] w-[342px] flex-col items-center gap-6 rounded-xl bg-[#F8F8F7] py-6">
      <p className="text-base font-semibold text-[#6C1F1F]">สติ๊กเกอร์</p>
      <div className="flex w-[253px] flex-wrap items-center gap-x-[50px] gap-y-4">
        {stickerItems.map((item: Sticker) => (
          <div
            key={item.id}
            className={
              stickerId === item.id ? "rounded-lg border border-[#AA5656]" : ""
            }
            onClick={() => updateSticker(item.id)}
          >
            <Image src={item.path} width={100} height={100} alt="Sticker" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickerSelector;
