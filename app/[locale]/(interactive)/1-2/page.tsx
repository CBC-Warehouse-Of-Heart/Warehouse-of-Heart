"use client";
import NextButton from "@/components/ui/nextButton";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="absolute h-full w-full bg-1-2 bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col items-center text-center text-base leading-[32px] text-[#1E1B20]"
      >
        <p className="mt-72">
          สวัสดี
          <br />
          ยินดีต้อนรับเข้าสู่ห้องเก็บของใจ
        </p>
        <p className="mt-10">
          ที่ที่คุณจะได้ทบทวนเรื่องราวชีวิตที่ผ่านมา
          <br />
          และตามหาสิ่งที่แอบซ่อนอยู่
          <br />
          ในห้องเก็บของใจของคุณ
        </p>
        <div className="absolute bottom-48">
          <Link href="/1-3">
            <NextButton trigger={true} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
