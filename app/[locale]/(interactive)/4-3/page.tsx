"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("4-3");
  return (
    <div className="mx-auto flex flex-col items-center overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mb-[403px] mt-[218px] max-[380px]:mb-[335px]"
      >
        <p>{t("myDiary")}</p>
      </motion.div>

      <Link href="4-4">
        <motion.div
          initial={{ opacity: 0, z: -20 }}
          animate={{
            opacity: 1,
            z: 0,
            transition: { duration: 1, delay: 2.5 },
          }}
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
