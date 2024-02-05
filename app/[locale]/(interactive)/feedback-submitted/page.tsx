import NextButton from "@/components/ui/nextButton";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {
  params: {
    locale: string;
  };
};

export default function SubmittedPage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations("SubmittedPage");
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-start">
      <div className="z-10 mt-[225px] text-center">
        <div className="absolute left-1/2 top-[185px] z-10 h-min -translate-x-1/2 ">
          <IoIosCheckmarkCircle fill="#4bae4f" size={36.92} />
          <div className=" absolute left-1/2 top-1/2 -z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-woh-white"></div>
        </div>
        <p className="text-base text-black">{t("received")}</p>
      </div>
      <Link href="/end" className="absolute bottom-36">
        <NextButton />
      </Link>
    </div>
  );
}
