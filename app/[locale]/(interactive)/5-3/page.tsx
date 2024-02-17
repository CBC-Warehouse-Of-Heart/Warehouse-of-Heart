"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene5Page3: React.FC = () => {

    const t = useTranslations("5-3");

    return (
        <div className="bg-5-1 h-full w-full bg-cover bg-no-repeat flex flex-col items-center">

            <div className="flex flex-col items-center justify-center">

                {/* Screen text */}

                <motion.div
                    className="absolute bottom-[62%]"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="bg-white-radial bg-center bg-no-repeat flex h-[135px] w-[400px]">
                        <div className="w-full h-full flex flex-col justify-center items-cemter">
                            <p className="text-base text-woh-black text-center">
                                {t("fullOfMemories")}
                                <br />
                                {t("siftedThrough")}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Next button */}
                <motion.div
                    className="absolute top-[80%]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ delay: 2, duration: 1.5 }}
                >
                    <div >
                        <Link href="/5-4">
                            <NextButton />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Scene5Page3;
