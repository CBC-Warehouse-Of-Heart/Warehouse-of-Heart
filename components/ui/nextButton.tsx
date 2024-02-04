import { useTranslations } from "next-intl";
import { Button } from "./button";

type Props = {
  trigger?: boolean;
};

const NextButton = ({ trigger = true }: Props) => {
  const t = useTranslations("NextButton");
  return (
    <Button disabled={!trigger} variant="next" size="xs">
      <p>{t("next")}</p>
    </Button>
  );
};

export default NextButton;
