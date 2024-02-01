import NextButton from "@/components/ui/nextButton";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("1-2");
  return (
    <div className="absolute flex h-full w-full flex-col items-center bg-1-2 bg-cover bg-no-repeat text-center text-base leading-[32px] text-[#1E1B20]">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col items-center text-center text-base leading-[32px] text-[#1E1B20]"
      > */}
      <p className="mt-72">
        {t("welcomeTo")}
        <br />
        {t("warehouseOfHeart")}
      </p>
      <p className="mt-10">
        {t("inWhich")}
        <br />
        {t("yourJourney")}
        <br />
        {t("yourHeart")}
      </p>
      <div className="absolute bottom-48">
        <Link href="/1-3">
          <NextButton trigger={true} />
        </Link>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Page;
