import Heart from "@/components/background/heart";
import NextButton from "@/components/ui/nextButton";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Heart />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container z-10 mb-[150px] mt-[200px] px-10 text-center">
          <p className="text-base leading-normal text-[#F8F8F7]">
            ไม่เป็นไรเลยนะถ้าเธอยังไม่พร้อม <br /> วันนี้พักผ่อนสักหน่อย <br />
            แล้วกลับมาที่นี่ได้ทุกเมื่อ <br /> ที่เธอต้องการ :-) <br />
            <br />
            <br />
          </p>
        </div>
        <Link href="/end">
          <NextButton />
        </Link>
      </div>
    </>
  );
};

export default Page;
