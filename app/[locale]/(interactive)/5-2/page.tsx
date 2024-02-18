"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const DivStyles = "w-[360px] flex flex-col items-center top-0";

const Scene5Page2: React.FC = () => {
  const t = useTranslations("5-2");

  return (
    <div className="relative flex h-[844px] w-full flex-col items-center justify-between">
      {/* First Block */}
      <motion.div
        className={cn("h-[350px] justify-end pb-[30px]", DivStyles)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        {/* Screen text */}
        <div
          className="flex h-[120px] w-[360px] flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(46.01% 42.5% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.98) 47.17%, rgba(255, 255, 255, 0.84) 67.17%, rgba(255, 255, 255, 0.56) 86.17%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          <div className="text-center text-base font-normal text-zinc-900 ">
            <p className="text-center">{t("thisDiaryIs")}</p>
            <p className="text-center">{t("aPeekInto")}</p>
          </div>
        </div>
      </motion.div>

      {/* Secound Block */}
      <motion.div
        className={cn("h-[94px] justify-start pr-[10px]", DivStyles)}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ delay: 3.5, duration: 1.5 }}
      >
        {/* Next button */}
        <div className="border-gray-100 absolute inline-flex h-8 w-[100px] items-center rounded-[100px] border bg-stone-50 shadow">
          <div className="flex items-start justify-start">
            <Link rel="stylesheet" href="/5-3">
              {/* Pass the trigger prop to NextButton */}
              <NextButton trigger={true} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene5Page2;
