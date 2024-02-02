import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DownloadImageAlert = (props: { trigger: boolean }) => {
  const t = useTranslations("DownloadImageAlert");
  return (
    <AnimatePresence>
      {props.trigger && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="z-3 fixed left-0 top-0 flex h-full w-full bg-[#000000]" />
          </motion.div>
          <motion.div
            initial={{ y: -75 }}
            animate={{ y: 20 }}
            exit={{ y: -75 }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="z-4 fixed left-1/2 flex h-[72px] w-[358px] -translate-x-1/2 transform items-start gap-2 rounded-2xl bg-[#FFFFFF] p-4 shadow-[0px_8px_20px_0px_#00000026]">
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
        </>
      )}
    </AnimatePresence>
  );
};

export default DownloadImageAlert;
