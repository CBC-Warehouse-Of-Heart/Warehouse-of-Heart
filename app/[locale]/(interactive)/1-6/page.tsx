'use client'
import StartButton from "@/components/ui/startButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";
import { motion } from "framer-motion";

type Props = {
  params: {
    locale: string;
  };
};

const Page = () => {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("1-6");
  return (
    <>
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="absolute top-[40%] space-y-1 text-center text-[#F8F8F7]">
          <p>{t("welcomeTo")}</p>
          <p>{t("warehouseOfHeart")}</p>
          <p>{t("journeyBegin")}</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{opacity: 1, z: 10, transition: { duration: 1, delay: 2.5 }}}
        className="absolute top-[55%]">
          <Link href="/2-1">
            <StartButton />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
