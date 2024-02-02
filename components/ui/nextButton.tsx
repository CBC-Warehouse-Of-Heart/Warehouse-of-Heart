import { useTranslations } from "next-intl";

const NextButton = (props: { trigger: boolean }) => {
  const t = useTranslations("NextButton");
  return (
    <button
      disabled={!props.trigger}
      className="relative flex h-8 w-28 items-center justify-center rounded-[100px] bg-woh-white text-[#6C1F1F] disabled:text-[#B8BFCB]"
    >
      <p className="text-base font-semibold">{t("next")}</p>
    </button>
  );
};

export default NextButton;
