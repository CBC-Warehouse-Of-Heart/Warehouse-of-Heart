import { Button } from "@/components/ui/button";
import NextButton from "@/components/ui/nextButton";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-6");
  return (
    <>
      <div className="bg-1-6 mx-auto flex min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 text-center text-[#F8F8F7]">
          <p className="mb-1">{t("welcomeTo")}</p>
          <p className="mb-1">{t("warehouseOfHeart")}</p>
          <p className="mb-1">{t("journeyBegin")}</p>
        </div>
      </div>
      <Link href="/2-1">
        <NextButton />
      </Link>
    </>
  );
};

export default Page;
