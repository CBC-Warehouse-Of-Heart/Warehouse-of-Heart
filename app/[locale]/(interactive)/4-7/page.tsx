"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useRenderedStrokes } from "@/utils/svg";
import { motion } from "framer-motion";
type Props = {};

const Page = (props: Props) => {
  const allStrokes = useRenderedStrokes(1);

  return (
    <div className="mx-auto flex h-[100dvh] flex-col items-center text-white">
      <div className="mt-[320px] flex justify-center">
        <svg
          id="svg"
          className="relative scale-[0.4] touch-none object-contain"
        >
          {allStrokes}
        </svg>
      </div>
      <div className="mt-[200px] max-[380px]:mt-[110px]">
        <Link href="/4-8">
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
