"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function Page() {
  const t = useTranslations("4-2");
  return (
    <div
        className="mx-auto min-w-[430px] bg-4-2 bg-cover bg-no-repeat"
    >

      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mt-[147px] mb-[403px] max-[380px]:mb-[310px] bg-white-radial bg-center bg-no-repeat p-10"
      >
        <p className="text-center">{t("asYouWalk")}</p>
        <p className="text-center">{t("youSawANotebook")}</p>
      </motion.div>
      

      <Link href="4-3">
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
