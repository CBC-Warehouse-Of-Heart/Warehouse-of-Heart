"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useRenderedStrokes } from "@/utils/svg";
import { motion } from "framer-motion";
type Props = {};

const Page = (props: Props) => {
  const allStrokes = useRenderedStrokes(1);
  return (
    <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
      <div className="absolute inset-x-0 left-[15%] top-[29%] normal:top-[31.5%]">
        <svg id="svg" className="scale-[0.4] touch-none object-contain">
          {allStrokes}
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 2.5 },
        }}
        className="absolute top-[80%]"
      >
        <Link href="4-8">
          <NextButton />
        </Link>
      </motion.div>
    </div>
  );
};

export default Page;
