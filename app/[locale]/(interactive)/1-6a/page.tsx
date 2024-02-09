'use client'
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Page = () => {
  const t = useTranslations("1-6a");
  return (
    <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
      className="absolute top-[40%] text-center text-[#F8F8F7]">
        <p className="mb-1">{t("itsOkay")}</p>
        <p className="mb-1">{t("weAre")}</p>
        <p className="mb-1">{t("takeRest")}</p>
        <p className="mb-1">{t("seeYou")}</p>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{opacity: 1, z: 10, transition: { duration: 1, delay: 2.5 }}}
      className="absolute top-[57%]">
        <Link href="/end">
          <NextButton />
        </Link>
      </motion.div>
    </div>
  );
};

export default Page;
