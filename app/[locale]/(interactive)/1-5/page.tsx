import { Button } from "@/components/ui/button";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div className="flex flex-col bg-1-6 mx-auto min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 font-semibold text-center text-[#F8F8F7]">
          <p className="mb-1">ตอนนี้คุณพร้อมที่จะเดินทาง</p>
          <p className="mb-1">เข้าสู่ห้องเก็บของใจแล้วหรือยัง</p>
        </div>
        <div className="flex flex-row space-x-4 mt-5">
          <Link href="/1-6">
          <Button className="border-solid border-[2.5px] border-pink-brown text-white bg-pink-brown">พร้อมแล้ว</Button>
          </Link>
          <Link href="/1-6a">
        <Button className="border-solid border-[2.5px] border-pink-brown text-pink-brown bg-white">ยังไม่แน่ใจ</Button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
