import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function End() {
  return (
    <>
      <div className="p-[29px] pt-[28px]">
        <div
          style={{
            background:
              //"linear-gradient(343deg, rgba(248,248,247,1) 0%, rgba(248,248,247,0.77) 50%, rgba(248,248,247,0) 100%)",
              "linear-gradient(302deg, #F8F8F7 5.26%, rgba(248, 248, 247, 0.77) 73.14%, rgba(248, 248, 247, 0.00) 99.48%)"
            }}
          className="rounded-[30px] p-7"
        >
          <div className="flex flex-col items-center justify-center">
            {/* สำหรับหัวข้อกับรูป */}
            <p className="mb-5 text-center font-serif text-[26px]">
              Warehouse of Heart
            </p>

            <div className="relative mb-[20px] flex h-[243px] w-[218px] items-center justify-center rounded-[20px] bg-gray"></div>

            <p className="mb-[24px] text-center text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="font-serif">Register</Button>
          </div>
        </div>

        {/* second session */}
        <div className="mt-[32px] flex flex-col items-center justify-center text-center">
          <p className="font-serif font-[18px]">Learn more about us...</p>
          <Image
            className="mb-[32px] mt-[32px] rounded-[20px]"
            src="/img/coachByChamp.png"
            width={203}
            height={114}
            alt="coachByChamp"
          />
          <p className="font-serif font-[19px]">Coach by Champ</p>
          <div className="flex flex-col justify-center">
            <div className="mt-[34px] flex w-full flex-row">
              <Image
                className="ml-0 mr-[41px] rounded-[20px]"
                src="/img/coach1.png"
                width={115}
                height={115}
                alt="coachByChamp1"
              />
              <p className="mt-[35px] font-serif">Coach by Champ</p>
            </div>

            <div className="mt-[24px] flex w-full flex-row">
              <Image
                className="ml-0 mr-[41px] rounded-[20px]"
                src="/img/coach2.png"
                width={115}
                height={115}
                alt="coachByChamp1"
              />
              <p className="mt-[35px] font-serif">Coach by Champ</p>
            </div>

            <div className="mt-[24px] flex w-full flex-row">
              <Image
                className="ml-0 mr-[41px] rounded-[20px]"
                src="/img/coach3.png"
                width={115}
                height={115}
                alt="coachByChamp3"
              />
              <p className="mt-[35px] font-serif">Coach by Champ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
