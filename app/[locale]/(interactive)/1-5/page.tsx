import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("1-5");
  return (
    <>
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <div className="mb-0 text-center font-semibold text-[#F8F8F7]">
          <p className="mb-1">{t("areYouReady")}</p>
          <p className="mb-1">{t("forTheJourney")}</p>
        </div>
        <div className="mt-5 flex flex-row space-x-4">
          <Link href="/1-6">
            <Button className="border-pink-brown bg-pink-brown border-[2.5px] border-solid text-white">
              {t("ready")}
            </Button>
          </Link>
          <Link href="/1-6a">
            <Button className="border-pink-brown text-pink-brown border-[2.5px] border-solid bg-white">
              {t("maybeNotNow")}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
