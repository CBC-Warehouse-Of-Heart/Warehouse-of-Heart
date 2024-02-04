"use client";
import NextButton from "@/components/ui/nextButton";
import { renderedStrokes } from "@/utils/svg";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const Page = (props: Props) => {
  const allStrokes = renderedStrokes(1);

  return (
    <div className="bg-4-5 mx-auto min-h-screen min-w-[430px] bg-cover bg-no-repeat">
      <div className="mt-[320px] flex justify-center">
        <svg
          id="svg"
          className="relative scale-[0.4] touch-none object-contain"
        >
          {allStrokes}
        </svg>
      </div>
      <div className="mt-[200px] max-[380px]:mt-[110px]">
        <Link href="4-8">
          <motion.div
            initial={{ opacity: 0, z: -20 }}
            animate={{
              opacity: 1,
              z: 0,
              transition: { duration: 1, delay: 1 },
            }}
          >
            <NextButton />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
