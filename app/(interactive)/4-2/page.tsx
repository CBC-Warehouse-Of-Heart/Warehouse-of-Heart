"use client";
import { getStroke } from "perfect-freehand";
import { useContext } from "react";
import AppContext from "../../../components/AppContext";

type Props = {};

const Page = (props: Props) => {
  const context = useContext(AppContext);
  const strokes = context.session;

  function getSvgPathFromStroke(stroke: any) {
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

  const renderedStrokes = strokes.map((stroke: any, index: any) => {
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
      <div className="fixed top-[140px] flex items-center space-x-[16px] text-center">
        <svg
          id="svg"
          className="relative h-[112px] w-[235px] touch-none rounded-[10px] bg-[#F8F8F7] opacity-80"
        >
          {renderedStrokes}
        </svg>
        <p className="text[#1E1B20] font-cursive text-[40px]">'s</p>
      </div>

      <p className="fixed bottom-36 text-[15px] text-[#F8F8F7]">
        เลื่อนหน้าจอเพื่อไปต่อ
      </p>
    </div>
  );
};

export default Page;
