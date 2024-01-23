import { useStickerStore } from "@/stores/sticker.store";
import Image from "next/image";
import Carousel, { consts } from "react-elastic-carousel";
import { stickerItems } from "./stickerItems";

type Sticker = {
  id: number;
  path: string;
};

const myArrow = ({
  type,
  onClick,
  isEdge,
}: {
  type: string;
  onClick: () => void;
  isEdge: boolean;
}) => {
  const pointer = type === consts.PREV ? "<" : ">";
  return (
    <button onClick={onClick} disabled={isEdge} className="text-[#6C1F1F]">
      {pointer}
    </button>
  );
};

const ElasticCarousel = () => {
  const stickerId = useStickerStore((state) => state.stickerId);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  return (
    <div className="flex h-[144px] w-[342px] flex-col items-center gap-3 rounded-xl bg-[#F8F8F7] p-3">
      <p className="text-base font-semibold text-[#6C1F1F]">Sticker</p>
      <Carousel
        itemsToShow={3}
        renderArrow={myArrow}
        renderPagination={() => {
          return <div></div>;
        }}
      >
        {stickerItems.map((item: Sticker) => (
          <div
            key={item.id}
            className="bg-red"
            onClick={() => updateSticker(item.id)}
          >
            <Image src={item.path} width={50} height={50} alt="Sticker" />
          </div>
        ))}
      </Carousel>
      <p className="mt-auto font-serif text-xs font-semibold text-[#1E1B20]">
        <span className="font-serif text-[#6C1F1F]">{stickerId}</span> / 6
      </p>
    </div>
  );
};

export default ElasticCarousel;
