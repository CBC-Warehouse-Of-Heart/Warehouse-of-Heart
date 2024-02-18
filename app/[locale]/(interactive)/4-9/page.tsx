"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page = () => {
  const t = useTranslations("4-9");
  const [visibleText, setVisibleText] = useState<
    "OPEN_DIARY" | "MAYBE_ITS_TIME" | null
  >("OPEN_DIARY");

  useEffect(() => {
    setTimeout(() => {
      setVisibleText(null);
    }, backgroundMapConfig["4-9"].stopMotionDuration * 1.5);

    setTimeout(() => {
      setVisibleText("MAYBE_ITS_TIME");
    }, backgroundMapConfig["4-9"].stopMotionDuration * 4.2);

    setTimeout(() => {
      setVisibleText(null);
    }, backgroundMapConfig["4-9"].stopMotionDuration * 5.5);
  }, []);
  return (
    <AnimatePresence>
      {visibleText === "OPEN_DIARY" && (
        <motion.div
          key="OPEN_DIARY"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: backgroundMapConfig["4-9"].stopMotionDuration / 2000,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: backgroundMapConfig["4-9"].stopMotionDuration / 2000,
            },
          }}
          className="absolute inset-x-0 top-[21%] z-50 text-center text-xl text-white"
        >
          {t("openDiary")}
        </motion.div>
      )}
      {visibleText === "MAYBE_ITS_TIME" && (
        <motion.div
          key="MAYBE_ITS_TIME"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: backgroundMapConfig["4-9"].stopMotionDuration / 2000,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: backgroundMapConfig["4-9"].stopMotionDuration / 2000,
            },
          }}
          className="absolute inset-x-0 top-[22%] z-50 space-y-0 text-center text-white"
        >
          <div className="relative left-10">{t("maybeitstime")}</div>
          <div className="relative left-12">{t("withYourself")}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page;
