'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NextButton from '@/components/ui/nextButton';

const DivStyles = 'w-[360px] flex flex-col items-center top-0';

const Scene4Page11: React.FC = () => {

    {/* Word count */ }
    const [char, setChar] = useState<string>('');
    const updateCharCount = (value: string) => {
        setChar(value);
        const charCount = value.length;
        console.log(`Number of char: ${charCount}`);
    };

    return (
        <div className="w-[390px] h-[844px] flex flex-col items-center relative bg-[url('./bg/bg1.jpeg')] bg-cover bg-center">

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
                        'radial-gradient(54.07% 54.17% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.98) 36.4%, rgba(255, 255, 255, 0.84) 59.9%, rgba(255, 255, 255, 0.56) 76.9%, rgba(255, 255, 255, 0.00) 93.48%)',
                    }}>
                    <div className="text-center text-zinc-900 text-base font-normal ">
                    ช่วงนี้มีความรู้สึกหรือเหตุการณ์ใด
                    <br />
                    ที่คุณอยากปล่อยวางบ้าง
                    </div>
                </div>
            </motion.div>

            {/* Second Block */}
            <motion.div className={`h-[320px] justify-start ${DivStyles}`}
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
                    onChange={(e) => updateCharCount(e.target.value)}
                    name="inputScene4Page11"
                    placeholder="โปรดพิมพ์คำตอบของคุณ"
                    className="w-[342px] h-[152px] p-3 bg-stone-50 rounded-xl "
                />
            </motion.div>

            {/* Third Block */}
            <motion.div className={`h-[100px] justify-start ${DivStyles}`}
            initial={{ opacity: 0 , y:5}}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 5}}
            transition={{ delay: 3.5, duration: 1.5}}
            >
                {/* Next button */}
                <div className="w-[108px] h-8 absolute bg-stone-50 rounded-[100px] shadow border border-gray-100 items-center inline-flex">
                    <div className="justify-start items-start flex">
                        <Link rel="stylesheet" href="/4-12">
                            {/* Pass the trigger prop to NextButton */}
                            <NextButton trigger={char.length > 0} />
                        </Link>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene4Page11;
