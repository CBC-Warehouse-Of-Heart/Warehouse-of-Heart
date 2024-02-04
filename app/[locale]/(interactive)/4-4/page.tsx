"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function Page() {
  const t = useTranslations("4-4");
  return (
    <div className="text-white text-center mx-auto min-w-[430px] min-h-screen bg-4-3 bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mt-[218px] mb-[403px] max-[380px]:mb-[310px]"
      >
        <p className="">{t("whyHere")}</p>
        <p className="">{t("haveNotSeen")}</p>
      </motion.div>
      

      <Link href="4-5">
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
