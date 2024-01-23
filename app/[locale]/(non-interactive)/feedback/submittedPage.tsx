import NextButton from "@/components/ui/nextButton";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {};

export default function SubmittedPage(props: Props): JSX.Element {
  return (
    <>
      <Image
        src="/img/feedback-submitted.webp"
        alt="Description"
        layout="fill"
        objectFit="cover"
        className="fixed"
      />

      <div className="mx-auto flex h-screen w-[390px] flex-col items-center justify-start">
        <div className="z-10 mt-[130px] text-center">
          <div className="absolute left-1/2 top-[85px] z-10 h-min -translate-x-1/2 ">
            <IoIosCheckmarkCircle fill="#4bae4f" size={36.92} />
            <div className=" absolute left-1/2 top-1/2 -z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-woh-white"></div>
          </div>
          <p className="text-base text-woh-white">
            เราได้รับ Feedback จากคุณแล้ว
          </p>
        </div>
        <Link href="/end" className="z-10">
          <NextButton />
        </Link>
      </div>
    </>
  );
}
