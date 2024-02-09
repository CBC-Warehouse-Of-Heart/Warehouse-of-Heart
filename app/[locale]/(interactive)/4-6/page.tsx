"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useNameStrokeStore } from "@/stores/NameStroke.store";
import { getSvgPathFromStroke, useRenderedStrokes } from "@/utils/svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getStroke } from "perfect-freehand";
import React, { useRef } from "react";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-6");
  const { nameStroke, updateNameStroke } = useNameStrokeStore();
  const [hasWrite, setWrite] = React.useState<boolean>(false);
  const currentStroke = useRef<number[][]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const allStrokes = useRenderedStrokes(1);

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    setWrite(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    const pos = svgRef.current!.getBoundingClientRect();
    currentStroke.current = [
      [e.pageX - pos.left, e.pageY - pos.top, e.pressure],
    ];
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.buttons !== 1) return;
    const pos = svgRef.current!.getBoundingClientRect();
    currentStroke.current.push([
      e.pageX - pos.left,
      e.pageY - pos.top,
      e.pressure,
    ]);
    updateNameStroke([...nameStroke]);
  }

  function handlePointerUp() {
    // new function to handle new independent stroke
    updateNameStroke([...nameStroke, currentStroke.current]);
    currentStroke.current = [];
  }

  function clearStrokes() {
    setWrite(false);
    updateNameStroke([]);
  }

  return (
    <>
      <div className="mx-auto flex h-[100dvh] flex-col items-center text-white">
        <div className="absolute inset-x-0 top-[22%] max-[420px]:top-[%] flex flex-col items-center text-center">
          <p className="text-white">{t("theOwnerIs")}</p>
          <div className="relative mt-16">
            <svg
              id="svg"
              ref={svgRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative h-[160px] w-[350px] touch-none rounded-[10px] bg-[#E8E5DD] opacity-100"
            >
              {allStrokes}
              {currentStroke.current.length > 0 && (
                <path
                  d={getSvgPathFromStroke(
                    getStroke(currentStroke.current, {
                      size: 8,
                      thinning: 0.5,
                      smoothing: 0.5,
                      streamline: 0.5,
                    }),
                    1,
                  )}
                />
              )}
            </svg>

            {!(hasWrite || nameStroke.length) && (
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none text-center text-[#B4A49A]">
                {t("drawToSign")}
              </p>
            )}

            <div onClick={clearStrokes} className="absolute right-4 top-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1E1B20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eraser"
              >
                <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                <path d="M22 21H7" />
                <path d="m5 11 9 9" />
              </svg>
            </div>
          </div>
          <br />
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 2.5 },
        }}
        className="absolute top-[80%]"
      >
        <Link href="4-7">
          <NextButton />
        </Link>
      </motion.div>
      </div>
    </>
  );
};

export default Page;
