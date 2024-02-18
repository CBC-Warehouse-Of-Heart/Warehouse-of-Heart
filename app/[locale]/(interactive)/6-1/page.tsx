"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("5-6");
  const locale = useLocale();

  return (
    <div className="mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className={
          "max-[380px]:mb-[310px] absolute inset-x-0 top-[25%] m-auto bg-white-radial bg-center bg-no-repeat p-10"
        }
      >
        <p
          className={cn(
            "mx-auto text-center",
            locale === "en" ? "max-w-[252px]" : "max-w-[286px]",
          )}
        >
          {t("meetAgain")}
        </p>
      </motion.div>

      <Link href="6-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute inset-x-0 top-[75%] m-auto flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
