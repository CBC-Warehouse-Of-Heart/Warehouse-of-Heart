"use client";
import { useRouter } from "next/navigation";
import { getStroke } from "perfect-freehand";
import React, { useContext, useRef } from "react";
import AppContext from "../../../components/AppContext";

type Props = {};

const Page = (props: Props) => {
  function getSvgPathFromStroke(stroke: any) {
    if (!stroke.length) return "";
    const d = stroke.reduce(
      (acc: any[], [x0, y0]: any, i: number, arr: string | any[]) => {
        const [x1, y1] = arr[(i + 1) % arr.length];
        acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
        return acc;
      },
      ["M", ...stroke[0], "Q"],
    );
    d.push("Z");
    return d.join(" ");
  }

  const [hasWrite, setWrite] = React.useState<boolean>(false);
  const [strokes, setStrokes] = React.useState<number[][][]>([]);
  const currentStroke = useRef<number[][]>([]);
  const context = useContext(AppContext);
  const router = useRouter();

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    setWrite(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    var frame = document.getElementById("svg");
    var pos = frame.getBoundingClientRect();
    currentStroke.current = [
      [e.pageX - pos.left, e.pageY - pos.top, e.pressure],
    ];
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.buttons !== 1) return;
    var frame = document.getElementById("svg");
    var pos = frame.getBoundingClientRect();
    currentStroke.current.push([
      e.pageX - pos.left,
      e.pageY - pos.top,
      e.pressure,
    ]);
    setStrokes([...strokes]);
  }

  function handlePointerUp() {
    // new function to handle new independent stroke
    setStrokes([...strokes, currentStroke.current]);
    currentStroke.current = [];
  }

  function clearStrokes() {
    setWrite(false);
    setStrokes([]);
  }

  const renderedStrokes = strokes.map((stroke, index) => {
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
    <div
      className="flex h-full w-full flex-col items-center justify-center"
      onClick={() => {
        context.setSession(strokes);
        router.push("/4-2");
      }}
    >
      <div
        className="flex flex-col items-center space-y-5 text-center text-[26px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[#F8F8F7]">เจ้าของสมุดเล่มนี้คือ...</p>
        <div className="relative">
          <svg
            id="svg"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
              touchAction: "none",
              position: "relative",
              width: 331,
              height: 158,
              borderRadius: 10,
              opacity: 0.8,
              backgroundColor: "#F8F8F7",
            }}
          >
            {renderedStrokes}
            {currentStroke.current.length > 0 && (
              <path
                d={getSvgPathFromStroke(
                  getStroke(currentStroke.current, {
                    size: 8,
                    thinning: 0.5,
                    smoothing: 0.5,
                    streamline: 0.5,
                  }),
                )}
              />
            )}
          </svg>

          {!hasWrite && (
            <p className="absolute left-[59px] top-[59px] text-[#A98F7E]">
              ลากนิ้วเพื่อเขียนชื่อ
            </p>
          )}

          <div
            onClick={clearStrokes}
            className="absolute left-[285px] top-[11px]"
          >
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

      <p className="fixed bottom-36 text-[15px] text-[#F8F8F7]">
        เลื่อนหน้าจอเพื่อไปต่อ
      </p>
    </div>
  );
};

export default Page;
