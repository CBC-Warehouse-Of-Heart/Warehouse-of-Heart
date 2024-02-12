'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextButton from '@/components/ui/nextButton';
import { useTranslations } from "next-intl";
import {cn} from '@/lib/utils'

const DivStyles = 'w-[360px] flex flex-col items-center top-0';

const Scene3Page2: React.FC = () => {

    const t = useTranslations("3-2");

    return (
        <div className="w-[390px] h-[844px] flex flex-col justify-between items-center relative">

            {/* First Block */}
            <motion.div className={cn('h-[350px] justify-end pb-[30px]', DivStyles)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 2 }}
            >
                {/* Screen text */}
                <div
                    className="w-[360px] h-[120px] flex flex-col items-center justify-center">
                    <div className="text-center text-zinc-900 text-base font-normal ">
                    <p className="text-center">{t("finallyArrived")}</p>
                    </div>
                </div>
            </motion.div>

            {/* Secound Block */}
            <motion.div className={cn('h-[94px] justify-start pr-[10px]', DivStyles)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ delay: 3.5, duration: 1.5 }}
            >
                {/* Next button */}
                <div className="w-[100px] h-8 absolute bg-stone-50 rounded-[100px] shadow border border-gray-100 items-center inline-flex">
                    <div className="justify-start items-start flex">
                        <Link rel="stylesheet" href="/3-3">
                            {/* Pass the trigger prop to NextButton */}
                            <NextButton trigger={true} />
                        </Link>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene3Page2;
