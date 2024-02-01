import { Button } from "@/components/ui/button";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div className="bg-1-6 mx-auto flex min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 text-center text-[#F8F8F7]">
          <p className="mb-1">ถ้าคุณพร้อมแล้ว ยินดีต้อนรับเข้าสู่</p>
          <p className="mb-1">Warehouse of Heart </p>
          <p className="mb-1">ห้องเก็บของใจอีกครั้ง</p>
        </div>
      </div>
      <Link href="/2-1">
        <NextButton />
      </Link>
    </>
  );
};

export default Page;
