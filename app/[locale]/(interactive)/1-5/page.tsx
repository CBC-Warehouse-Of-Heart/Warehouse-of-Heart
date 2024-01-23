import Heart from "@/components/background/heart";
import NextButton from "@/components/ui/nextButton";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Heart />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container z-10 mb-[220px] mt-[244px] px-10 text-center ">
          <p className="text-base leading-normal text-[#F8F8F7]">
            งั้นเรามาเริ่ม <br /> การเดินทางนี้กันเลย
            <br />
            <br />
            <br />
          </p>
        </div>
        <Link href="/2-1">
          <NextButton />
        </Link>
      </div>
    </>
  );
};

export default Page;
