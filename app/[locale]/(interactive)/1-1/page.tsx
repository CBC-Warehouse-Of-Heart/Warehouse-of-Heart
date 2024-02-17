"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-1");

  const [userAgentData, setUserAgentData] = useState<string>();
  useEffect(() => {
    const parser = new UAParser(navigator.userAgent);
    setUserAgentData(parser.getDevice().model);
  }, []);

  return (
    <div className="absolute h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute flex h-full w-full items-center justify-center bg-[#E0D9C7]"
      >
          <Image
            src="/img/Logo_WOH.webp"
            width={0}
            height={0}
            alt="WOH logo"
            style={{ width: "40%", height: "auto" }}
          />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="flex flex-col items-center text-center text-base text-woh-black"
      >
        <p className="mt-[22vh] font-bold text-woh-black">{t("about")}</p>
        <p className="mt-2 w-80 text-woh-black">{t("story")}</p>
        <p className="mt-10 font-bold text-[#A65554]">{t("warningHeading")}</p>
        <p className="mt-2 w-72 text-[#A65554]">{t("warning")}</p>

        <div className="absolute bottom-[10vh]">
          {userAgentData === "iPhone" ? (
            <Link href="/0">
              <NextButton />
            </Link>
          ) : (
            <Link href="/1-2">
              <NextButton />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
