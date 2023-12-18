import Image from "next/image";
type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Image
        src="/images/bg_4-1.webp"
        alt="Description"
        layout="fill"
        objectFit="cover"
        className="-z-1"
      />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="container mb-[220px] mt-[244px] px-10 text-center ">
          <p className="text-xl leading-normal text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            ในชีวิตของเรามีเรื่องราวเกิดขึ้นมากมาย <br />{" "}
            มีทั้งเรื่องที่อยากให้เกิด และไม่อยากให้เกิด <br /> เรื่องที่อยากทำ
            เรื่องที่ทำไม่ได้
          </p>
        </div>
        <div className="container z-10 text-center">
          <p className=" text-base leading-normal text-[#F8F8F7] ">
            เลื่อนหน้าจอเพื่อไปต่อ
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
