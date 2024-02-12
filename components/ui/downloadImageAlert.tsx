import { DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DownloadImageAlert = () => {
  const t = useTranslations("DownloadImageAlert");
  return (
    <DialogContent className="top-0 flex flex-col items-center border-none">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 75 }}
        exit={{ y: -20 }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="z-4 flex h-[72px] w-[358px] items-start gap-2 rounded-2xl bg-[#FFFFFF] p-4 shadow-[0px_8px_20px_0px_#00000026]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-circle-2"
          >
            <circle cx="12" cy="12" r="10" fill="#00B488" />
            <path d="m9 12 2 2 4-4" fill="#00B488" />
          </svg>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-[#00B488]">
              {t("success")}
            </p>
            <p className="text-xs text-[#293038]">{t("theImage")}</p>
          </div>
        </div>
      </motion.div>
    </DialogContent>
  );
};

export default DownloadImageAlert;
