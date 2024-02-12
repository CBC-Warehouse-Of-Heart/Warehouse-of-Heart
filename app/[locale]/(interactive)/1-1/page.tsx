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
  const t = useTranslations("1-1");
  return (
    <div className="absolute flex h-full w-full flex-col items-center bg-1-1 bg-cover bg-no-repeat text-center text-base">
      <p className="mt-[28vh] font-bold text-woh-black">{t("about")}</p>
      <p className="mt-2 w-80 text-woh-black">{t("story")}</p>
      <p className="mt-10 font-bold text-[#A65554]">{t("warningHeading")}</p>
      <p className="mt-2 w-72 text-[#A65554]">{t("warning")}</p>

      <div className="absolute bottom-[10vh]">
        <Link href="/1-2">
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default Page;
