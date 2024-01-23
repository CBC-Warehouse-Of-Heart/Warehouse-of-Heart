"use client";
import NextButton from "@/components/ui/nextButton";
import { useNameStorkeStore } from "@/stores/NameStroke.store";
import { useShareYourselfWordsStore } from "@/stores/ShareYourselfWords.store";
import { useStickerStore } from "@/stores/sticker.store";
import Image from "next/image";
import Link from "next/link";
import { getStroke } from "perfect-freehand";

type Props = {};

const Page = (props: Props) => {
  const words = useShareYourselfWordsStore((state) => state.words);
  const stickerId = useStickerStore((state) => state.stickerId);
  const stickerPath = useStickerStore((state) => state.stickerPath);
  const nameStorke = useNameStorkeStore((state) => state.nameStorke);

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
    <div className="flex h-full w-full flex-col items-center">
      <div className="mt-52 flex h-[480px] w-[284px] flex-col items-start rounded-xl bg-[#F3F3F0]">
        <div className="flex">
          <p className="text[#1E1B20] font-cursive text-lg text-lg">ถีง</p>
          <svg id="svg" className="relative h-[30px] w-[63px] touch-none">
            {renderedStrokes}
          </svg>
        </div>
        <div className="text[#1E1B20] overflow-auto break-words text-base">
          {words}
        </div>
        <div className="mt-auto flex items-center self-end">
          {stickerId <= 1 && (
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-[#AA5656] bg-[#FFF]">
              <p className="text-center text-xs font-medium text-[#675D51]">
                กด
                <br />
                เพื่อเลือก
              </p>
            </div>
          )}
          {stickerId > 1 && (
            <Image
              src={stickerPath}
              width={64}
              height={64}
              alt="Selected Sticker"
            />
          )}
        </div>
      </div>

      {/* <ElasticCarousel></ElasticCarousel> */}

      <div className="absolute bottom-16">
        <Link href="/4-17">
          <NextButton></NextButton>
        </Link>
      </div>
    </div>
  );
};

export default Page;
