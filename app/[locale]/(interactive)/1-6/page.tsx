import StartButton from "@/components/ui/startButton";
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
  const t = useTranslations("1-6");
  return (
    <>
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <div className="space-y-1 text-center text-[#F8F8F7]">
          <p>{t("welcomeTo")}</p>
          <p>{t("warehouseOfHeart")}</p>
          <p>{t("journeyBegin")}</p>
        </div>
      </div>
      <Link href="/2-1">
        <StartButton />
      </Link>
    </>
  );
};

export default Page;
