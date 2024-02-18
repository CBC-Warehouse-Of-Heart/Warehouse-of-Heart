"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useShareYourselfWordsStore } from "@/store/shareYourselfWords";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("4-15");
  const { words, updateWords } = useShareYourselfWordsStore();

  return (
    <div className="bg-4-15 h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute flex h-full w-full flex-col items-center"
      >
        <p className="z-1 absolute mt-[16vh] text-base text-woh-white">
          {t("afterAll")}
          <br />
          {t("doYou")}
        </p>

        <div className="z-1 absolute top-1/3 h-[240px] w-[342px]">
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
        <div className="absolute bottom-[14vh]">
          <Link href="/4-16">
            <NextButton trigger={words.length > 0} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
