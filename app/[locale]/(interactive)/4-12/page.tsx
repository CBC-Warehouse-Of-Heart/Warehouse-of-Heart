"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const DivStyles = "w-[360px] flex flex-col items-center top-0";

const Scene4Page12: React.FC = () => {

    const [char, setChar] = useState<string>("");

    const t = useTranslations("4-12");
    const ta = useTranslations("TextArea");

    return (
        <div className="bg-4-10 h-full w-full bg-cover bg-no-repeat relative flex flex-col items-center">
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
                    className="bg-white-radial bg-center bg-no-repeat p-10 flex h-[120px] w-[360px] flex-col items-center justify-center"
                >
                    <div className="text-center text-base font-normal text-zinc-900 ">
                    <p className="text-center">{t("someGoodThing")}</p>
                    <p className="text-center">{t("haveHappened")}</p>
                    </div>
                </div>
            </motion.div>

            {/* Second Block */}
            <motion.div
                className={cn("h-[320px] justify-start", DivStyles)}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ delay: 3.5, duration: 1.5 }}
            >
                {/* Input box */}
                <textarea
                    required
                    rows={5}
                    maxLength={180}
                    value={char}
                    onChange={(e) => setChar(e.target.value)}
                    name="inputScene4Page12"
                    placeholder={ta("answerInput")}
                    className="h-[152px] w-[342px] rounded-xl bg-stone-50 p-3 "
                />
            </motion.div>

            {/* Third Block */}
            <motion.div
                className={cn("h-[100px] justify-start", DivStyles)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ delay: 3.5, duration: 1.5 }}
            >
                {/* Next button */}
                <div className="border-gray-100 absolute inline-flex h-8 w-[108px] items-center rounded-[100px] border bg-stone-50 shadow">
                    <div className="flex items-start justify-start">
                        <Link href="/4-13">
                            {/* Pass the trigger prop to NextButton */}
                            <NextButton trigger={char.length > 0} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Scene4Page12;
