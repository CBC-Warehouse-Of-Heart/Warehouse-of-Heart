import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-1");
  return (
    <div className="absolute flex h-full w-full flex-col items-center bg-1-1 bg-cover bg-no-repeat text-center text-base">
      <p className="mt-60 font-bold text-[#1E1B20]">{t("about")}</p>
      <p className="mt-3 w-80 text-[#1E1B20]">{t("story")}</p>
      <p className="mt-8 font-bold text-[#A65554]">{t("warningHeading")}</p>
      <p className="mt-2 w-80 text-[#A65554]">{t("warning")}</p>

      <div className="absolute bottom-48">
        <Link href="/1-2">
          <NextButton trigger={true} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
