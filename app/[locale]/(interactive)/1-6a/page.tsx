import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div className="bg-1-6 mx-auto flex min-w-[430px] items-center justify-center overflow-hidden bg-cover bg-no-repeat">
        <div className="mb-0 text-center text-[#F8F8F7]">
          <p className="mb-1">เราเชื่อว่าคุณจะผ่านวันที่ยากไปได้แน่นอน</p>
          <p className="mb-1">ดีใจที่คุณเลือกยอมรับความรู้สึกของตัวเอง</p>
          <p className="mb-1">วันนี้พักสักหน่อย</p>
          <p className="mb-1">แล้วกลับมาเจอกันได้ทุกเมื่อที่คุณต้องการ</p>
        </div>
      </div>
      <Link href="/end">
        <NextButton />
      </Link>
    </>
  );
};

export default Page;
