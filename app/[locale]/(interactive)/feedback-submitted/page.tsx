"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {};

export default function SubmittedPage(props: Props): JSX.Element {
  const t = useTranslations("SubmittedPage");
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-start">
      <div className="z-10 mt-[225px] text-center">
        <div className="absolute left-1/2 top-[185px] z-10 h-min -translate-x-1/2 ">
          <IoIosCheckmarkCircle fill="#4bae4f" size={36.92} />
          <div className=" absolute left-1/2 top-1/2 -z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-woh-white"></div>
        </div>
        <p className="text-base text-black">{t("received")}</p>
      </div>
      <Link href="/end" className="absolute bottom-36">
        <motion.div
          initial={{ opacity: 0, z: -20 }}
          animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
}
