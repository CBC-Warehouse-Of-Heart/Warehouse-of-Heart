"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("2-4");

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="mb-[325px] mt-[33vh] bg-center bg-no-repeat px-10 max-[380px]:mb-[310px]"
      >
        <p className="text-center leading-7 text-woh-white">{t("manyThing")}</p>
        <p className="text-center leading-7 text-woh-white">{t("theDay")}</p>
      </motion.div>

      <Link href="2-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
