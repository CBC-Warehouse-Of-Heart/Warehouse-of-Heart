"use client";
import NextButton from "@/components/ui/nextButton";
import { useNameStorkeStore } from "@/stores/NameStroke.store";
import Link from "next/link";
import { getStroke } from "perfect-freehand";
type Props = {};

const Page = (props: Props) => {
  const nameStorke = useNameStorkeStore((state) => state.nameStorke);

  function getSvgPathFromStroke(stroke: number[][]) {
    if (!stroke.length) return "";
    // reduce the size of svg by divisor
    const divisor = 1.41;
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
      <div className="mt-36 flex items-center space-x-[16px] text-center">
        <svg
          id="svg"
          className="relative h-[112px] w-[235px] touch-none rounded-[10px] bg-[#F8F8F7] opacity-80"
        >
          {renderedStrokes}
        </svg>
        <p className="text[#1E1B20] font-cursive text-[40px]">'s</p>
      </div>
      <div className="mt-6">
        <Link href="/4-15">
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default Page;
