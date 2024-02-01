import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center bg-1-1 bg-cover bg-no-repeat text-center text-base leading-[32px]">
      <p className="mt-60 font-bold text-[#1E1B20]">เกี่ยวกับงาน</p>
      <p className="mt-3 text-[#1E1B20]">
        เรื่องราวการเดินทางเข้าสู่ห้องเก็บของใจ
        <br />
        ที่ผู้เล่นจะได้ทบทวนเรื่องราวในชีวิตของตัวเอง
        <br />
        ทั้งเรื่องที่ให้ความรู้สึกเชิงบวกและเชิงลบ
        <br />
        ในลักษณะของการตอบคำถาม เพื่อให้เกิด
        <br />
        self-awareness ซึ่งจะเกิดผ่าน Interactive
        <br />
        Experience ระหว่างผู้เล่นและเว็บไซต์
      </p>
      <p className="mt-8 font-bold text-[#A65554]">คำเตือน:</p>
      <p className="mt-2 text-[#A65554]">
        อาจมีคำถามที่กระทบต่อความรู้สึก
        <br />
        หากเกิดความไม่สบายใจ
        <br />
        แนะนำให้พักจากการเล่นทันที
      </p>

      <div className="absolute bottom-48">
        <Link href="/1-2">
          <NextButton trigger={true} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
