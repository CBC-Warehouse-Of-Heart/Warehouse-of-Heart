import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("1-6a");
  return (
    <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
      <div className="mb-0 ml-10 mr-10 text-center text-[#F8F8F7]">
        <p className="mb-1">{t("itsOkay")}</p>
        <p className="mb-1">{t("weAre")}</p>
        <p className="mb-1">{t("takeRest")}</p>
        <p className="mb-1">{t("seeYou")}</p>
      </div>
      <Link href="/end" className="mt-9">
        <NextButton />
      </Link>
    </div>
  );
};

export default Page;
