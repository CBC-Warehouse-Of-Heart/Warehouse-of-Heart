"use client";
import NextButton from "@/components/ui/nextButton";
import { useShareYourselfWordsStore } from "@/stores/ShareYourselfWords.store";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const words = useShareYourselfWordsStore((state) => state.words);
  const updateWords = useShareYourselfWordsStore((state) => state.updateWords);

  return (
    <div className="absolute h-full w-full overflow-hidden">
      <Image
        src="/img/bg/4-5.png"
        alt="Background"
        className="z-0 object-cover "
        fill={true}
        priority={true}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="absolute flex h-full w-full flex-col items-center"
      >
        <p className="z-1 absolute mt-52 text-base text-[#F8F8F7]">
          พอได้ทบทวนเรื่องราวช่วงนี้แล้ว
          <br />
          คุณอยากบอกอะไรกับตัวเอง
        </p>

        <div className="z-1 absolute mt-80 h-[240px] w-[342px]">
          <textarea
            id="tellmyself-text"
            className="h-[240px] w-[342px] break-words rounded-xl bg-woh-white p-4 text-base text-[#1E1B20]"
            placeholder="โปรดพิมพ์คำตอบของคุณ"
            maxLength={225}
            value={words}
            onChange={(e) => updateWords(e.target.value)}
          ></textarea>
          <p className="absolute bottom-3 right-4 text-[#B4A49A]">
            {words.length} / 225
          </p>
        </div>

        <div className="absolute bottom-52">
          <Link href="/4-16">
            <NextButton trigger={words.length > 0} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
