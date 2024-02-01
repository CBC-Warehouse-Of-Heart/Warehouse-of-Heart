"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const text_4_1 = '"เอ๊ะ อะไรวางอยู่บนโต๊ะกันนะ"';

  return (
    <div className="mx-auto min-w-[430px] bg-4-1 bg-cover bg-no-repeat overflow-hidden">
      <motion.div
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        className="mt-[147px] mb-[403px] bg-white-radial bg-center bg-no-repeat p-10"
      >
        <p className="text-center">{text_4_1}</p>
      </motion.div>
      

      <Link href="4-2">
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
