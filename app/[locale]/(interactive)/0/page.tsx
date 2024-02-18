"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("0");

  return (
    <div className="absolute h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex flex-col items-center text-center text-base text-woh-black"
      >
      <p className="mt-[22vh] font-bold text-woh-black">{t("forIOS")}</p>
      <p className="mt-2 w-80 text-woh-black">
        {t("toEnjoy")}
        <br />
        {t("openThis")}
        <br />
        {t("andHide")}
      </p>

      <div className="absolute bottom-[10vh]">
        <Link href="/1-2">
          <NextButton />
        </Link>
      </div>
      </motion.div>
    </div>
  );
};

export default Page;
