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
                <div
                    className="flex h-[120px] w-[360px] flex-col items-center justify-center"
                >
                    <div className="text-center absolute mt-[22vh] text-base text-woh-white">
                        <p> {t("badDay")}
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
                            {t("warehouseOfHeart")}</p>
                    </div>
                </div>

                {/* Next button */}
                <div className="border-gray-100 absolute inline-flex h-8 w-[108px] items-center rounded-[100px] border bg-stone-50 shadow">
                    <div className="flex items-start justify-start">
                        <Link href="/4-15">
                            <NextButton trigger={true} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Scene4Page14;
