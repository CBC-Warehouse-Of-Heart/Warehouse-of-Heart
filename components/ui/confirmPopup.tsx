import { useTranslations } from "next-intl";
import Link from "next/link";

const ConfirmPopup = (props: {
  trigger: boolean;
  setTrigger: (arg0: boolean) => void;
}) => {
  const t = useTranslations("ConfirmPopup");
  return (
    props.trigger && (
      <>
        <div className="z-3 fixed left-0 top-0 flex h-full w-full bg-[#000000] opacity-70" />
        <div className="z-2 fixed left-1/2 top-1/2 flex h-[192px] w-[280px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-[30px] bg-[#FFFFFF] text-center shadow-[0px_4px_9px_0px_#0000000A]">
          <p className="mt-9 text-lg font-medium text-[#6C1F1F]">
            {t("areYouSure")}
          </p>
          <p className="mt-2 text-sm text-[#1E1B20]">
            {t("youCannot")}
            <br />
            {t("blank")}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => props.setTrigger(false)}
              className="h-8 w-[74px] rounded-[10px] border-[2px] border-[#B78181] text-sm text-[#B78181]"
            >
              {t("cancel")}
            </button>
            <Link href="/4-18">
              <button className="h-8 w-[74px] rounded-[10px] bg-[#B78181] text-sm text-[#FFFFFF]">
                {t("next")}
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default ConfirmPopup;
