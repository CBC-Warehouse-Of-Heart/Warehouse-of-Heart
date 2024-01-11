"use client";
import NextButton from "@/components/ui/nextButton";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
export default function Page2_1a() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center text-xl">
        <p>ถ้าให้คะแนนสำหรับวันนี้ คงจะได้...</p>
        <Slider
          onValueChange={(newValue) => console.log(newValue)}
          className="mt-20"
          defaultValue={[1]}
          min={1}
          max={10}
          step={1}
        />
      </div>
      <div className="mt-56 text-center text-sm">
        <Link href="/3-1">
          <NextButton />
        </Link>
      </div>
    </div>
  );
}
