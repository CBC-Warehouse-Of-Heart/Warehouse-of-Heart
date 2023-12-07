import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container mb-[150px] mt-[200px] px-10 text-center">
          <p className="text-xl leading-normal text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            ไม่เป็นไรเลยนะถ้าเธอยังไม่พร้อม <br /> วันนี้พักผ่อนสักหน่อย <br />
            แล้วกลับมาที่นี่ได้ทุกเมื่อ <br /> ที่เธอต้องการ :-)
          </p>
        </div>
        <Link href="/end">
          <Button size="lg" className=" h-[50px]">
            <p className="text-2xl font-semibold">ถัดไป</p>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Page;
