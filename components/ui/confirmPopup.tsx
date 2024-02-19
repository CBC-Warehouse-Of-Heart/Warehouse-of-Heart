import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

type Props = {
  href?: string;
};

const ConfirmPopup = ({ href = "/5-1" }: Props) => {
  const t = useTranslations("ConfirmPopup");
  return (
    <DialogContent className="flex items-center justify-center border-none shadow-none">
      <div className="z-2 flex w-[280px] flex-col items-center rounded-[30px] bg-[#FFFFFF] text-center shadow-[0px_4px_9px_0px_#0000000A]">
        <p className="mt-9 text-lg font-medium text-[#6C1F1F]">
          {t("areYouSure")}
        </p>
        <p className="mt-2 text-sm text-[#1E1B20]">
          {t("youCannot")}
          <br />
          {t("blank")}
        </p>
        <div className="mb-9 mt-4 flex justify-center gap-4">
          <DialogClose>
            <button className="h-8 w-[74px] rounded-[10px] border-[2px] border-[#B78181] text-sm text-[#B78181]">
              {t("cancel")}
            </button>
          </DialogClose>

          <Link href={href}>
            <button className="h-8 w-[74px] rounded-[10px] bg-[#B78181] text-sm text-[#FFFFFF]">
              {t("next")}
            </button>
          </Link>
        </div>
      </div>
    </DialogContent>
  );
};

export default ConfirmPopup;
