"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene5Page4: React.FC = () => {
  const t = useTranslations("5-4");

  return (
    <div className="bg-5-1 flex h-full w-full flex-col items-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        {/* Screen text */}

        <motion.div
          className="absolute bottom-[62%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex h-[135px] w-[400px] bg-white-radial bg-center bg-no-repeat">
            <div className="items-cemter flex h-full w-full flex-col justify-center">
              <p className="text-center text-base text-woh-black">
                {t("howNice")}
                <br />
                {t("inWarehouse")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next button */}
        <motion.div
          className="absolute bottom-[18%]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <div>
            <Link href="/5-5">
              <NextButton />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Scene5Page4;
