import Heart from "@/components/background/heart";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Link href="/">
        <Heart />
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="container mb-[220px] mt-[244px] px-10 text-center ">
            <p className="text-xl leading-normal text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              งั้นเรามาเริ่ม <br /> การเดินทางนี้กันเลย
            </p>
          </div>
          <div className="container text-center">
            <p className=" text-base leading-normal text-[#F8F8F7] ">
              กดที่หน้าจอเพื่อไปต่อ
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Page;
