"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Scene4Page12: React.FC = () => {

  const [char, setChar] = useState<string>("");

  const t = useTranslations("4-12");
  const ta = useTranslations("TextArea");

    return (
        <div className="bg-4-10 h-full w-full bg-cover bg-no-repeat flex flex-col items-cente">
            <div className="flex flex-col items-center justify-center">
                {/* First Block */}
                <motion.div
                    className="absolute top-[24%]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    {/* Screen text */}
                    <div className="bg-white-radial bg-center bg-no-repeat p-10 flex h-[120px] w-[360px] ">
                        <div className="w-full h-full flex flex-col justify-center items-cemter">
                            <p className="text-base text-woh-black text-center">
                                {t("someGoodThing")}
                                <br />
                                {t("haveHappened")}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Second Block */}
                <motion.div
                    className="absolute top-[42%]"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    transition={{ delay: 3.5, duration: 1.75 }}
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
                    className="absolute top-[75%]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ delay: 3.5, duration: 1.75 }}
                >

                    {/* Next button */}
                    <Link href="/4-13">
                        {/* Pass the trigger prop to NextButton */}
                        <NextButton trigger={char.length > 1} />
                    </Link>
                </motion.div>
            </div>
        </div>
  );
};

export default Scene4Page12;
