import { cn } from "@/lib/utils";
import { useStickerStore } from "@/stores/sticker.store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { stickerItems } from "../constant/stickerItems";

const StickerSelector = () => {
  const t = useTranslations("StickerSelector");
  const { stickerId, updateSticker } = useStickerStore();
  return (
    <div className="z-2 fixed left-1/2 top-1/2 flex h-[560px] w-[342px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-6 rounded-xl bg-[#F8F8F7] py-6">
      <p className="text-base font-semibold text-[#6C1F1F]">{t("sticker")}</p>
      <div className="flex w-[253px] flex-wrap items-center gap-x-[50px] gap-y-4">
        {stickerItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              stickerId === item.id && "rounded-lg border border-[#AA5656]",
            )}
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
