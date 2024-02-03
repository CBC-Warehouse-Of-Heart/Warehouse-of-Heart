"use client";
import NextButton from "@/components/ui/nextButton";
import StickerSelector from "@/components/ui/stickerSelector";
import { useNameStorkeStore } from "@/stores/NameStroke.store";
import { useShareYourselfWordsStore } from "@/stores/ShareYourselfWords.store";
import { useStickerStore } from "@/stores/sticker.store";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { getStroke } from "perfect-freehand";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-16");

  const words = useShareYourselfWordsStore(
    (state: { words: string }) => state.words,
  );
  const stickerId = useStickerStore(
    (state: { stickerId: number }) => state.stickerId,
  );
  const stickerPath = useStickerStore(
    (state: { stickerPath: string }) => state.stickerPath,
  );
  const nameStorke = useNameStorkeStore(
    (state: { nameStorke: number[][][] }) => state.nameStorke,
  );
  const [showStickers, setShowSticker] = useState<boolean>(false);
  const [hasSelectedSticker, setSelectedSticker] = useState<boolean>(false);

  function getSvgPathFromStroke(stroke: number[][]) {
    if (!stroke.length) return "";
    // reduce the size of svg by divisor
    const divisor = 5;
    const d = stroke.reduce(
      (acc: any[], [x0, y0]: any, i: number, arr: string | any[]) => {
        const [x1, y1] = arr[(i + 1) % arr.length];
        acc.push(
          x0 / divisor,
          y0 / divisor,
          (x0 + x1) / 2 / divisor,
          (y0 + y1) / 2 / divisor,
        );
        return acc;
      },
      ["M", stroke[0][0] / divisor, stroke[0][1] / divisor, "Q"],
    );
    d.push("Z");
    return d.join(" ");
  }

  const renderedStrokes = nameStorke.map((stroke, index) => {
    const pathData = getSvgPathFromStroke(
      getStroke(stroke, {
        size: 8,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
      }),
    );
    return <path key={index} d={pathData} />;
  });

  return (
    <div className="bg-4-16 absolute flex h-full w-full flex-col items-center bg-cover bg-no-repeat">
      <div className="z-1 absolute mr-8 mt-56 flex h-[440px] w-[284px] flex-col items-start rounded-xl">
        <div className="flex">
          <p className="font-cursive text-lg text-woh-black">{t("dear")}</p>
          <svg id="svg" className="relative h-[30px] w-[63px] touch-none">
            {renderedStrokes}
          </svg>
        </div>
        <div className="mt-1 overflow-hidden break-words text-base text-woh-black">
          <p>{words}</p>
        </div>
        <p className="fixed ml-20 mt-[400px] -rotate-6 text-[#844D4D]">
          {t("sticker")}
        </p>
        <Image
          src="/img/arrow.png"
          width={46}
          height={46}
          alt="Arrow Pointing To Sticker"
          className="fixed ml-36 mt-[420px]"
        />
        <div
          onClick={() => {
            setShowSticker(true);
          }}
          className="mt-auto flex items-center self-end"
        >
          {stickerId <= 1 && (
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-[#AA5656] bg-[#FFF]">
              <p className="text-center text-xs font-medium text-brown">
                {t("click")}
                <br />
                {t("toSelect")}
              </p>
            </div>
          )}
          {stickerId > 1 && (
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-[#AA5656] bg-[#FFF]">
              <Image
                src={stickerPath}
                width={100}
                height={100}
                alt="Selected Sticker"
              />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showStickers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="absolute flex h-full w-full flex-col items-center"
          >
            <StickerSelector />
            <div className="z-1 absolute bottom-16">
              <button
                onClick={() => {
                  setShowSticker(false);
                  setSelectedSticker(true);
                }}
                className="relative flex h-8 w-28 items-center justify-center rounded-[100px] bg-[#F8F8F7] text-[#6C1F1F]"
              >
                <p className="text-base font-semibold">{t("choose")}</p>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showStickers && (hasSelectedSticker || stickerId > 1) && (
        <div className="z-1 absolute bottom-16">
          <Link href="/4-17">
            <NextButton />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
