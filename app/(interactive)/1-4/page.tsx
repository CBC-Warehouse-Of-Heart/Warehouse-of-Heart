import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex h-screen items-center">
      <div className="container h-[320px] w-[320px] rounded-[30px] bg-[#A98F7E] px-[60px] py-9 text-center">
        <p className="font-sans text-2xl font-bold text-[#F8F8F7]">
          เธอพร้อมเดินทางไปด้วยกันมั้ย..?
        </p>
        <Link href="/1-5">
          <Button size="xl" className="mt-6">
            <p className="font-sans text-2xl font-semibold">พร้อมแล้ว</p>
          </Button>
        </Link>
        <Link href="/1-4a">
          <Button variant="secondary" size="xl" className="mt-6">
            <p className="font-sans text-2xl font-semibold">ยังไม่แน่ใจ</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
