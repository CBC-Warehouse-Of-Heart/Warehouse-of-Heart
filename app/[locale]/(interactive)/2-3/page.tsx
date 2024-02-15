"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("2-3");

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="absolute left-0 right-0 top-[32%] m-auto max-[380px]:mb-[310px]"
      >
        <p className="text-center leading-7 text-woh-white">{t("feeling")}</p>
        <p className="text-center leading-7 text-woh-white">{t("keepUp")}</p>
      </motion.div>

      <Link href="2-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute left-0 right-0 top-[77%] m-auto flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
