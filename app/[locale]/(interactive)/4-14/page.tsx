"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const DivStyles = "w-[360px] flex flex-col items-center top-0";

const Scene4Page14: React.FC = () => {

    const t = useTranslations("4-14");

    return (
        <div className="bg-4-14 h-full w-full bg-cover bg-no-repeat relative flex flex-col items-center">

            <motion.div
                className={cn("h-[350px] justify-end pb-[30px]", DivStyles)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {/* Screen text */}
                <div className="absolute bottom-[42%] -rotate-[4deg] pl-[0%]" >
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p className="text-sm text-woh-white text-center">
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
                    transition={{ delay: 3, duration: 1.5 }}
                >
                    <div >
                        <Link href="/4-15">
                            <NextButton trigger={true} />
                        </Link>
                    </div>

                </motion.div>
            </motion.div>
        </div>
    );
};

export default Scene4Page14;
