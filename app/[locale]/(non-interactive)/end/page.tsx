import { Button } from "@/components/ui/button";
import EndContent from "@/components/ui/endContent";
import Footer from "@/components/ui/footer";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: {
    locale: string;
  };
};

const End = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("end");
  return (
    <div className="w-full max-w-md">
      <div className="bg-end bg-cover bg-no-repeat">
        <div className="h-full w-full bg-[rgb(0,0,0,0.4)]">
          <div className="flex flex-col items-center px-7 py-14">
            <Image
              src="/img/Logo_WOH.webp"
              width={0}
              height={0}
              alt="WOH logo"
              style={{ width: "30%", height: "auto" }}
              className="mt-7"
            />
            <Image
              src="/img/Banner_WOH.webp"
              width={0}
              height={0}
              alt="WOH banner"
              style={{ width: "100%", height: "auto" }}
              className="mt-7"
              priority={true}
            />
            <Link href="https://www.zipeventapp.com/e/Warehouse-of-Heart" className="w-full">
              <Button variant="register" size="register" className="mt-6">
                {t("register")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <EndContent />
      <Footer />
    </div>
  );
};

export default End;
