import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center bg-1-3 bg-cover bg-no-repeat text-center text-base leading-[32px] text-[#1E1B20]">
      <p className="mt-72">
        ในระหว่างการเดินทาง
        <br />
        คุณอาจค้นเจอทั้งความทรงจำ
        <br />
        ที่แสนอบอุ่นเหมือนกับอ้อมกอด
        <br />
        ที่ปลอบประโลมและความทรงจำ
        <br />
        ที่คุณอาจพยายามหลีกเลี่ยง
      </p>
      <div className="absolute bottom-48">
        <Link href="/1-4">
          <NextButton trigger={true} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
