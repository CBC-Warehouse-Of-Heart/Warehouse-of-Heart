"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("4-4");
  return (
    <div className="mx-auto flex flex-col items-center overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mb-[403px] mt-[218px] max-[380px]:mb-[310px]"
      >
        <p className="text-center">{t("whyHere")}</p>
        <p className="text-center">{t("haveNotSeen")}</p>
      </motion.div>

      <Link href="4-5">
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
