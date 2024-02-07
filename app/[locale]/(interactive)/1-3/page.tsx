"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-3");
  return (
    <div className="absolute h-full w-full bg-1-3 bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex flex-col items-center text-center text-base leading-8 text-woh-black"
      >
        <p className="mt-[34vh]">
          {t("blank")}
          <br />
          {t("inThisJourney")}
          <br />
          {t("thereWillBe")}
          <br />
          {t("onesWarm")}
          <br />
          {t("likeHotCocoa")}
        </p>
        <div className="absolute bottom-[21vh]">
          <Link href="/1-4">
            <NextButton />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
