import Heart from "@/components/background/heart";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Heart />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="z-10 flex flex-col items-center space-y-1 text-center text-base leading-relaxed text-[#F8F8F7]">
          <p>
            สวัสดี
            <br />
            <br />
            ยินดีต้อนรับเข้าสู่
          </p>
          <p className="font-serif font-bold">“Warehouse of Heart”</p>
          <p>
            ขอบคุณที่เข้ามาหาเราในวันนี้นะ :-)
            <br />
            <br />
            <br />
          </p>
        </div>
        <Link href="/1-2">
          <NextButton />
        </Link>
      </div>
    </>
  );
};

export default Page;
