'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextButton from '@/components/ui/nextButton';

const DivStyles = 'w-[360px] flex flex-col items-center top-0';

const Scene5Page1: React.FC = () => {

    return (
        <div className="w-[390px] h-[844px] flex flex-col justify-between items-center relative bg-[url('./bg/bg1.jpeg')] bg-cover bg-center">

            {/* First Block */}
            <motion.div className={`h-[350px] justify-end pb-[30px] ${DivStyles}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 2 }}
            >
                {/* Screen text */}
                <div
                    className="w-[360px] h-[120px] flex flex-col items-center justify-center"
                    style={{
                        background:
                            "radial-gradient(46.01% 42.5% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.98) 47.17%, rgba(255, 255, 255, 0.84) 67.17%, rgba(255, 255, 255, 0.56) 86.17%, rgba(255, 255, 255, 0.00) 100%)",
                    }}>
                    <div className="text-center text-zinc-900 text-base font-normal ">
                        ความวุ่นวายที่ผ่านไปในแต่ละวัน
                        <br />
                        อาจทำให้เราเผลอมองข้ามความรู้สึก
                        <br />
                        ของตัวเองที่สะสมอยู่ในใจไปโดยไม่รู้ตัว
                    </div>
                </div>
            </motion.div>

            {/* Secound Block */}
            <motion.div className={`h-[94px] justify-start pr-[10px] ${DivStyles}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ delay: 3.5, duration: 1.5 }}
            >
                {/* Next button */}
                <div className="w-[100px] h-8 absolute bg-stone-50 rounded-[100px] shadow border border-gray-100 items-center inline-flex">
                    <div className="justify-start items-start flex">
                        <Link rel="stylesheet" href="/5-2">
                            {/* Pass the trigger prop to NextButton */}
                            <NextButton trigger={true} />
                        </Link>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene5Page1;
