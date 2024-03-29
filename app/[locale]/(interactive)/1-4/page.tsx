"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-4");
  return (
    <div className="absolute h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="text-woh-black flex flex-col items-center text-center text-base leading-8"
      >
        <p className="mt-[30vh]">
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
        <div className="absolute bottom-[21vh]">
          <Link href="/1-5">
            <NextButton />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
