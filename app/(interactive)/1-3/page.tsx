import Heart from "@/components/background/heart";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Heart />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="z-10 flex flex-col items-center text-center text-base leading-relaxed text-[#F8F8F7]">
          <p>
            อาจจะมีการขุดคุ้ยสิ่งที่
            <br />
            ส่งผลกับใจของเธอได้นะ
            <br />
            <br />
            <br />
          </p>
        </div>
        <Link href="/1-4">
          <NextButton />
        </Link>
      </div>
    </>
  );
};

export default Page;
