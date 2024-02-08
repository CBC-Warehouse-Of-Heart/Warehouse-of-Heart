import { useTranslations } from "next-intl";
import { Button } from "./button";

type Props = {
  trigger?: boolean;
  label?: string;
};

const StartButton = ({ trigger = true, label }: Props) => {
  const t = useTranslations("StartButton");
  return (
    <Button disabled={!trigger} variant="next" size="xs">
      <p>{label ? label : t("start")}</p>
    </Button>
  );
};

export default StartButton;