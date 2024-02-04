"use client";

import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="mx-auto flex h-[100dvh] flex-col items-center text-white">
      <Link href="4-6" className="h-full w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, transition: { duration: 1, delay: 1 } }}
          className="absolute right-[20%] top-[40%] h-10 w-10 animate-pulse rounded-full bg-black"
        />
      </Link>
    </div>
  );
}
