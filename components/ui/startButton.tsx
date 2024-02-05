import { useTranslations } from "next-intl";
import { Button } from "./button";

type Props = {
  trigger?: boolean;
  label?: string;
};

const StartButton = ({ trigger = true, label }: Props) => {
  const t = useTranslations("StartButton");
  return (
    <div className="fixed left-1/2 top-[60%] -translate-x-1/2 transform">
    <Button className="relative" disabled={!trigger} variant="next" size="xs">
      <p className="fixed left-1/2 -translate-x-1/2 transform text-base font-semibold text-[#6C1F1F]">{label ? label : t("start")}</p>
    </Button>
    </div>
  );
};

export default StartButton;