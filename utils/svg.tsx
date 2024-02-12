import { useNameStrokeStore } from "@/store/nameStroke";
import getStroke from "perfect-freehand";

export const getSvgPathFromStroke = (stroke: number[][], divisor: number) => {
  if (!stroke.length) return "";
  // reduce the size of svg by divisor
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
};

export const useRenderedStrokes = (divisor: number) => {
  const { nameStroke } = useNameStrokeStore();
  const allStroke = nameStroke.flatMap((stroke, index) => {
    const pathData = getSvgPathFromStroke(
      getStroke(stroke, {
        size: 8,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
      }),
      divisor,
    );
    return <path key={index} d={pathData} />;
  });
  return allStroke;
};