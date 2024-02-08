"use client";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter();

  //const playAudio = () => {

  return (
    <div className="bottom-0 left-0 right-0 h-[146px] bg-brown text-center">
      <div className="mt-10 text-white">
        <p className="pt-[13px] text-center  text-[15px]">
          Warehouse of Heart Exhibition 2024
          <br />
        </p>
        <p className=" text-[13px]">
          Coach by ChAMP all rights reserved
          <br />
        </p>
        <p className="mt-[20px]  text-[15px]">
          contact us: cbc_woh2024@gmail.com
        </p>
      </div>
    </div>
  );
}
