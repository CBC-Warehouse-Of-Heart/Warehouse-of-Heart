import Heart from "@/components/background/heart";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Heart />
      <div className="flex h-screen items-center">
        <div className="container z-10 h-[248px] w-[267px] rounded-[30px] bg-[#F8F8F7] px-[60px] py-7 text-center">
          <p className="font-sans text-lg font-bold text-[#6C1F1F]">
            เธอพร้อมเดินทางไปด้วยกันมั้ย..?
          </p>
          <Link href="/1-5">
            <Button variant="ready" size="xl" className="mt-5">
              <p className="font-sans text-lg font-semibold">พร้อมแล้ว</p>
            </Button>
          </Link>
          <Link href="/1-4a">
            <Button variant="notSure" size="xl" className="mt-3">
              <p className="font-sans text-lg font-semibold">ยังไม่แน่ใจ</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
