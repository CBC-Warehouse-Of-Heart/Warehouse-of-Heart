"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("3-1");

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 5.5 } }}
        className="max-[380px]:mb-[310px] absolute inset-x-0 top-[18.5%] m-auto"
      >
        <p className="text-center leading-7 text-woh-white">
          {t("finallyArrived")}
        </p>
      </motion.div>

      <Link href="2-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 7 },
          }}
          className="absolute inset-x-0 top-[86%] m-auto flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
