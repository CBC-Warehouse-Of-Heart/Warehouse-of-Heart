"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("5-6");
  const locale = useLocale();
  console.log(locale);

  return (
    <div className="relative mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="mt-[216px] bg-white-radial bg-center bg-no-repeat p-10 max-[380px]:mb-[310px]"
      >
        <p
          className={`mx-auto text-center max-w-[${
            locale === "en" ? "252" : "286"
          }px]`}
        >
          {t("meetAgain")}
        </p>
      </motion.div>

      <Link href="5-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="mt-[calc(89vh-344px)] flex justify-center"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
