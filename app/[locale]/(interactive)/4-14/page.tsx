"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene4Page14: React.FC = () => {

    const t = useTranslations("4-14");

    return (
        <div className="bg-4-14 h-full w-full bg-cover bg-no-repeat flex flex-col items-center">

            <div className="flex flex-col items-center justify-center">

                {/* Screen text */}
                <div className="absolute top-[36%] -rotate-[4deg] pl-[2%]" >
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p className="text-base text-woh-white text-center">
                            {t("badDay")}
                            <br />
                            {t("goodDay")}
                            <br />
                            {t("butThere")}
                            <br />
                            {t("moreDays")}
                            <br />
                            {t("canCreate")}
                            <br />
                            {t("yourWisher")}
                            <br />
                            {t("yourWisher2")}
                            <br />
                            {t("warehouseOfHeart")}
                        </p>
                    </motion.div>
                </div>

                {/* Next button */}
                <motion.div
                    className="absolute top-[80%]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ delay: 2, duration: 1.5 }}
                >
                    <div >
                        <Link href="/4-15">
                            <NextButton />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Scene4Page14;
