import { Link } from "@/lib/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <Link href="/3-2">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container px-10 text-center ">
          <p className="text-3xl leading-loose text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            ทำไมถึงมาอยู่ตรงนี้กันนะ <br /> ไม่ได้เห็นมานานเลย..
          </p>
        </div>
      </div>
      <div className="container fixed left-1/2 top-[85%] z-10 -translate-x-1/2 transform text-center">
        <p className=" text-base leading-normal text-[#F8F8F7] ">
          กดที่หน้าจอเพื่อไปต่อ
        </p>
      </div>
    </Link>
  );
};

export default Page;
