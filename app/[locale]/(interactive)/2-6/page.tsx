"use client";
import NextButton from "@/components/ui/nextButton";
import { Slider } from "@/components/ui/slider";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("2-6");
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <motion.div
        className="absolute top-1/4 text-center text-base text-white"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("ifIWere")}</p>
        <p>{t("to1")}</p>
        <Slider
          onValueChange={(newValue: { toString: () => string }) => {
            console.log(newValue);
            localStorage.setItem("slider", newValue.toString());
          }}
          className="absolute mt-20"
          defaultValue={[1]}
          min={1}
          max={10}
          step={1}
        />
        <div className="mt-36 flex flex-row justify-between">
          <p>1</p>
          <p>10</p>
        </div>
      </motion.div>
      <motion.div></motion.div>
      <Link href="2-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute inset-x-0 top-[75%] flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
