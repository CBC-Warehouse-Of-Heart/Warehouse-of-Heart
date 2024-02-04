"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("4-1");

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="bg-white-radial mb-[403px] mt-[147px] bg-center bg-no-repeat p-10 max-[380px]:mb-[310px]"
      >
        <p className="text-center">{t("whatIsThat")}</p>
      </motion.div>

      <Link href="4-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
