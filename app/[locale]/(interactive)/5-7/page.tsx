"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const locale = useLocale();
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setBlurred(true);
    }, 2500);
  }, []);

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: 1 },
        }}
      >
        <Image
          src={"/img/5-7_" + locale + "-2.webp"}
          alt="animated-image"
          fill
          className={`object-cover ${blurred ? " blur-[2px]" : " filter-none"}`}
        ></Image>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 2.5 } }}
        className="absolute left-[7%] top-[7%] aspect-[374.81/329.38] h-[88%] max-w-[88%]"
      >
        <Image
          src={"/img/key_" + locale + ".webp"}
          alt="key"
          fill
          className="object-contain"
        ></Image>
      </motion.div>
      <Link href="5-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 4 },
          }}
          className="absolute inset-x-0 top-[75%] m-auto flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
