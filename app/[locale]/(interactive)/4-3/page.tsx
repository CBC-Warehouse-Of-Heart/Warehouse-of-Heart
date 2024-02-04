"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function Page() {
  const t = useTranslations("4-3");
  return (
    <div className="text-white text-center mx-auto min-w-[430px] min-h-screen bg-4-3 bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mt-[218px] mb-[403px] max-[380px]:mb-[335px]"
      >
        <p>{t("myDiary")}</p>
      </motion.div>
      

      <Link href="4-4">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 2.5 } }}
      >
        <NextButton />
      </motion.div>
      </Link>
    </div>
  );
}
