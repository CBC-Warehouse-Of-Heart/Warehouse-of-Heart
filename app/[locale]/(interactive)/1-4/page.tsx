"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-4");
  return (
    <div className="absolute h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="text-woh-black flex flex-col items-center text-center text-base leading-8"
      >
        <p className="mt-64">
          {t("blank")}
          <br />
          {t("youMight")}
          <br />
          {t("safeAndSound")}
          <br />
          {t("toWander")}
          <br />
          {t("whereATreasure")}
        </p>
        <div className="absolute bottom-44">
          <Link href="/1-5">
            <NextButton />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
