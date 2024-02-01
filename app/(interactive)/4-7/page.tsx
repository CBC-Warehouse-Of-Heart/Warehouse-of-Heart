"use client";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";
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
    <div className="flex justify-center items-center mx-auto min-w-[430px] bg-4-5 bg-cover bg-no-repeat">
      <div className="">
        <svg id="svg" className="relative object-contain touch-none scale-[0.4]">
          
          {renderedStrokes}
        </svg>
      </div>
      
    </div>
  );
};

export default Page;
