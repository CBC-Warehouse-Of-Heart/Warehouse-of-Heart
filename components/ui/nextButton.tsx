import { useTranslations } from "next-intl";
import { Button } from "./button";

const NextButton = (props: { trigger: boolean }) => {
  const t = useTranslations("NextButton");
  return (
    <Button disabled={!props.trigger} variant="next" size="xs">
      <p>{t("next")}</p>
    </Button>
  );
};

NextButton.defaultProps = {
  trigger: true,
};

export default NextButton;
