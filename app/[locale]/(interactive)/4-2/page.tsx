"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("4-2");
  return (
    <div className="mx-auto overflow-hidden overscroll-none">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="bg-white-radial mb-[403px] mt-[147px] bg-center bg-no-repeat p-10 max-[380px]:mb-[310px]"
      >
        <p className="text-center">{t("asYouWalk")}</p>
        <p className="text-center">{t("youSawANotebook")}</p>
      </motion.div>

      <Link href="4-3">
        <motion.div
          initial={{ opacity: 0, z: -20 }}
          animate={{
            opacity: 1,
            z: 0,
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