import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-1");
  return (
    <div className="bg-1-1 absolute flex h-full w-full flex-col items-center bg-cover bg-no-repeat text-center text-base">
      <p className="text-woh-black mt-52 font-bold">{t("about")}</p>
      <p className="text-woh-black mt-2 w-80">{t("story")}</p>
      <p className="mt-10 font-bold text-[#A65554]">{t("warningHeading")}</p>
      <p className="mt-2 w-72 text-[#A65554]">{t("warning")}</p>

      <div className="absolute bottom-44">
        <Link href="/1-2">
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default Page;
