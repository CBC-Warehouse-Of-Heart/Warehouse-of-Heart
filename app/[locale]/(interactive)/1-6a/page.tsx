import NextButton from "@/components/ui/nextButton";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-6a");
  return (
    <>
      <div className="bg-1-6 mx-auto flex min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 text-center ml-10 mr-10 text-[#F8F8F7]">
          <p className="mb-1">{t("itsOkay")}</p>
          <p className="mb-1">{t("weAre")}</p>
          <p className="mb-1">{t("takeRest")}</p>
          <p className="mb-1">{t("seeYou")}</p>
        </div>
      </div>
      <Link href="/end">
        <NextButton />
      </Link>
    </>
  );
};

export default Page;
