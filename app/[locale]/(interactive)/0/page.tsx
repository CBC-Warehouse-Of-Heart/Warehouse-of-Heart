import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: {
    locale: string;
  };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("0");
  return (
    <div className="bg-1-1 absolute h-full w-full bg-cover bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center bg-[rgb(255,255,255,0.5)] text-center text-base">
        <div className="mt-10 w-full bg-[#874141] px-4 py-5 text-center leading-7 text-woh-white">
          <p>{t("inOrder")}</p>
          <p>
            {t("the")}
            <span className="font-semibold">{t("Warehouse")}</span>
            {t("comma")}
          </p>
          <p>{t("weSuggest")}</p>
        </div>

        <div className="mt-6 text-left leading-6">
          <p>{t("forIOS")}</p>
          <div className="flex">
            {t("open")}(
            <Image
              src="/img/Icon_safari.webp"
              width={0}
              height={0}
              alt="Safari icon"
              style={{ width: "24px", height: "auto" }}
            />{" "}
            ){t("fullStop")}
          </div>
          <p>{t("click")}</p>
          <p>
            {t("choose")}
            <span className="font-bold">"Hide Toolbar"</span>
            {t("fullStop")}
          </p>
        </div>

        <Image
          src="/img/iOS_instruction.webp"
          width={0}
          height={0}
          alt="iOS instruction"
          style={{ width: "75%", height: "auto" }}
          className="mt-6"
        />

        <div className="absolute bottom-[10vh]">
          <Link href="/1-1">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
