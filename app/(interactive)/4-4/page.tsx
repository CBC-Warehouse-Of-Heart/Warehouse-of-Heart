"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const text_4_3_a = '"ทำไมถึงมาอยู่ตรงนี้กันนะ';
  const text_4_3_b = 'ไม่ได้เห็นมานานเลย..."';

  return (
    <div className="text-white text-center mx-auto min-w-[430px] min-h-screen bg-4-3 bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mt-[218px] mb-[403px]"
      >
        <p className="">{text_4_3_a}</p>
        <p className="">{text_4_3_b}</p>
      </motion.div>
      

      <Link href="4-5">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 2.5 } }}
      >
        <NextButton />
      </motion.div>
      </Link>
    </div>
  );
}
