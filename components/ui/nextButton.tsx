import { useTranslations } from "next-intl";
import { Button } from "./button";

type Props = {
  trigger?: boolean;
  label?: string;
};

const NextButton = ({ trigger = true, label }: Props) => {
  const t = useTranslations("NextButton");
  return (
    <Button disabled={!trigger} variant="next" size="xs">
      <p>{label ? label : t("next")}</p>
    </Button>
  );
};


export default NextButton;
