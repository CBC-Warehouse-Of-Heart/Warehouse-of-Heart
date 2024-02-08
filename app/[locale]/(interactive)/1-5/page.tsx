"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
type Props = {
  params: {
    locale: string;
  };
};

const Page = () => {
  const t = useTranslations("1-5");
  return (
    <>
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute top-[40%] mb-0 text-center font-semibold text-[#F8F8F7]"
        >
          <p className="mb-1">{t("areYouReady")}</p>
          <p className="mb-1">{t("forTheJourney")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{opacity: 1, z: 10, transition: { duration: 1, delay: 2.5 }}}
          className="absolute top-[48%] flex flex-row space-x-4"
        >
          <Link href="/1-6">
            <Button className=" border-[2.5px] border-solid border-pink-brown bg-pink-brown text-white">
              {t("ready")}
            </Button>
          </Link>
          <Link href="/1-6a">
            <Button className="border-[2.5px] border-solid border-pink-brown bg-white text-pink-brown">
              {t("maybeNotNow")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
