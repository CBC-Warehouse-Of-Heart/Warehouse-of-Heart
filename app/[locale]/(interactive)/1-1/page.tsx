import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("Welcome");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-1 text-center text-[21px] leading-relaxed text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <p>
          {t("hello")}
          <br />
          <br />
          {t("welcomeTo")}
        </p>
        <p className="font-serif font-bold">{t("warehouseOfHeart")}</p>
        <p>{t("thankYouForVisiting")}</p>
      </div>

      <Link href="/1-2" className="fixed bottom-36 text-[15px] text-[#F8F8F7]">
        <p>กดที่หน้าจอเพื่อไปต่อ</p>
      </Link>
    </div>
  );
};

export default Page;
