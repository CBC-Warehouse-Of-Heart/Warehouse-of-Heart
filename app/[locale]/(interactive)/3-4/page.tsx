"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("3-4");

  return (
    <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="absolute inset-x-0 top-[20%] bg-white-radial bg-center bg-no-repeat p-10"
      >
        <p className="text-center">{t("uponEntering")}</p>
          <p className="text-center">{t("theTable")}</p>
          <p className="text-center">{t("yourAttention")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 2.5 },
        }}
        className="absolute top-[80%]"
      >
        <Link href="4-1">
          <NextButton />
        </Link>
      </motion.div>
    </div>
  );
}
