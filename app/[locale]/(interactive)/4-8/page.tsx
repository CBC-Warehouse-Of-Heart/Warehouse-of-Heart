"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useNameStrokeStore } from "@/store/nameStroke";
import { motion } from "framer-motion";
import { getStroke } from "perfect-freehand";
type Props = {};

const Page = (props: Props) => {
  const { nameStroke } = useNameStrokeStore();

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

  const renderedStrokes = nameStroke.map((stroke: any, index: any) => {
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
    <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
      <svg
        id="svg"
        className="absolute left-[17%] top-[22%] scale-[0.2] touch-none object-contain normal:top-[23%] tall:top-[25%]"
      >
        {renderedStrokes}
      </svg>
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{
          opacity: 1,
          z: 0,
          transition: { duration: 1, delay: 1 },
        }}
        className="absolute top-[80%]"
      >
        <Link href="/4-9">
          <NextButton />
        </Link>
      </motion.div>
    </div>
  );
};

export default Page;
