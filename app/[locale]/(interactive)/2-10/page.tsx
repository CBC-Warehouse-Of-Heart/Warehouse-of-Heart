"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page2_1a() {
  const t = useTranslations("2-10");
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <motion.div
        className="absolute top-1/4 text-center text-base text-white"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("onTheWay")}</p>
        <p>{t("youReflect")}</p>
        <p>{t("andLookForward")}</p>
      </motion.div>

      <Link href="2-11">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute inset-x-0 top-[75%] flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
