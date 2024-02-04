"use client";
import NextButton from "@/components/ui/nextButton";
import { renderedStrokes } from "@/utils/svg";
import Link from "next/link";
type Props = {};

const Page = (props: Props) => {
  const allStrokes = renderedStrokes(1.41);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="mt-36 flex items-center space-x-[16px] text-center">
        <svg
          id="svg"
          className="relative h-[112px] w-[235px] touch-none rounded-[10px] bg-[#F8F8F7] opacity-80"
        >
          {allStrokes}
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
