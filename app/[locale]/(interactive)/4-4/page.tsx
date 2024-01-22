import Image from "next/image";
type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Image
        src="/images/bg_4-3.webp"
        alt="Description"
        layout="fill"
        objectFit="cover"
        className="-z-1"
      />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container px-10 text-center ">
          <p className="text-3xl leading-loose text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            นานเท่าไหร่แล้วนะ <br /> ที่ไม่ได้คิดถึงเรื่องนี้...
          </p>
        </div>
      </div>
      <div className="container fixed left-1/2 top-[85%] z-10 -translate-x-1/2 transform text-center">
        <p className=" text-base leading-normal text-[#F8F8F7] ">
          เลื่อนหน้าจอเพื่อไปต่อ
        </p>
      </div>
    </>
  );
};

export default Page;
