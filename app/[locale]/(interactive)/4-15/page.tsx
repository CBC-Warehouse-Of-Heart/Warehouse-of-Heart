"use client";
import NextButton from "@/components/ui/nextButton";
import { useShareYourselfWordsStore } from "@/stores/ShareYourselfWords.store";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-15");

  const words = useShareYourselfWordsStore(
    (state: { words: string }) => state.words,
  );
  const updateWords = useShareYourselfWordsStore(
    (state: { updateWords: (words: string) => void }) => state.updateWords,
  );

  return (
    <div className="bg-4-15 absolute h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute flex h-full w-full flex-col items-center"
      >
        <p className="z-1 absolute mt-52 text-base text-woh-white">
          {t("afterAll")}
          <br />
          {t("doYou")}
        </p>

        <div className="z-1 absolute mt-80 h-[240px] w-[342px]">
          <textarea
            id="tellmyself-text"
            className="h-[240px] w-[342px] break-words rounded-xl bg-woh-white p-4 text-base text-[#1E1B20] placeholder:text-[#B4A49A]"
            placeholder={t("typeAnswer")}
            maxLength={225}
            value={words}
            onChange={(e) => updateWords(e.target.value)}
          ></textarea>
          <p className="absolute bottom-3 right-4 text-[#B4A49A]">
            {words.length} / 225
          </p>
        </div>

        <div className="absolute bottom-48">
          <Link href="/4-16">
            <NextButton trigger={words.length > 0} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
