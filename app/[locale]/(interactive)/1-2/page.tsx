"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-2");
  return (
    <div className="absolute h-full w-full bg-1-2 bg-cover bg-no-repeat">
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
          {t("welcomeTo")}
          <br />
          {t("warehouseOfHeart")}
        </p>
        <p className="mt-10">
          {t("inWhich")}
          <br />
          {t("yourJourney")}
          <br />
          {t("yourHeart")}
        </p>
        <div className="absolute bottom-[21vh]">
          <Link href="/1-3">
            <NextButton />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
