"use client";
import NextButton from "@/components/ui/nextButton";
import { useShareYourselfWordsStore } from "@/stores/ShareYourselfWords.store";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const words = useShareYourselfWordsStore((state) => state.words);
  const updateWords = useShareYourselfWordsStore((state) => state.updateWords);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <Image
        src="/img/bg/4-5.png"
        width={430}
        height={932}
        alt="Background"
        className="z-0"
      />
      <p className="z-1 absolute mt-52 text-base text-[#F8F8F7]">
        พอได้ทบทวนเรื่องราวช่วงนี้แล้ว
        <br />
        คุณอยากบอกอะไรกับตัวเอง
      </p>

      <textarea
        id="tellmyself-text"
        className="z-1 absolute mt-80 h-[240px] w-[342px] break-words rounded-xl bg-woh-white p-4 text-base text-[#1E1B20]"
        placeholder="โปรดพิมพ์คำตอบของคุณ"
        value={words}
        onChange={(e) => updateWords(e.target.value)}
      ></textarea>
      <div className="absolute bottom-48">
        <Link href="/4-16">
          <NextButton></NextButton>
        </Link>
      </div>
    </div>
  );
};

export default Page;
