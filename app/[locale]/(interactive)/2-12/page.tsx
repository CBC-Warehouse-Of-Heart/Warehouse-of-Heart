"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("3-2");

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="max-[380px]:mb-[310px] absolute inset-x-0 top-[18.5%] m-auto"
      >
        <p className="text-center leading-7 text-woh-white">
          {t("waveOfRelaxation")}
        </p>
        <p className="text-center leading-7 text-woh-white">
          {t("washOverYou")}
        </p>
        <p className="text-center leading-7 text-woh-white">
          {t("hasDecided")}
        </p>
      </motion.div>

      <Link href="2-13">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute inset-x-0 top-[86%] m-auto flex justify-center"
        >
          <NextButton label={t("enter")} />
        </motion.div>
      </Link>
    </div>
  );
}
