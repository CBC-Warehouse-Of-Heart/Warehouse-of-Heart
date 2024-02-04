import { Button } from "@/components/ui/button";
import NextButton from "@/components/ui/nextButton";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-5");
  return (
    <>
      <div className="flex flex-col bg-1-5 mx-auto min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 font-semibold text-center text-[#F8F8F7]">
          <p className="mb-1">{t("areYouReady")}</p>
          <p className="mb-1">{t("forTheJourney")}</p>
        </div>
        <div className="flex flex-row space-x-4 mt-5">
          <Link href="/1-6">
          <Button className="border-solid border-[2.5px] border-pink-brown text-white bg-pink-brown">{t("ready")}</Button>
          </Link>
          <Link href="/1-6a">
        <Button className="border-solid border-[2.5px] border-pink-brown text-pink-brown bg-white">{t("maybeNotNow")}</Button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
