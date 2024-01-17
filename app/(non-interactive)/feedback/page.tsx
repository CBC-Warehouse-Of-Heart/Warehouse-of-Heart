"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FormEvent, useState } from "react";
import "./styles.css";
import SubmittedPage from "./submittedPage";

type Props = {};

const Page = (props: Props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (rating === 0 && comment === "") {
      setSubmitted(true);
      return;
    }
    setIsSubmitting(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        comment,
      }),
    });

    setSubmitted(true);
    setIsSubmitting(false);
  };
  if (submitted) {
    return <SubmittedPage />;
  }
  return (
    <>
      <Image
        src="/img/feedback.webp"
        alt="Description"
        layout="fill"
        objectFit="cover"
        className="fixed"
      />
      <form
        action={process.env.NEXT_PUBLIC_WEB_URL + "/end"}
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto flex h-screen w-[390px]  flex-col items-center justify-start">
          <div className="z-10 mt-[130px] text-center">
            <p className="text-base text-woh-white">
              บอกความรู้สึกของคุณที่มีต่อกิจกรรมนี้สิ
            </p>
          </div>
          <div className="z-10 mt-6 flex w-full justify-between px-14">
            <Button
              size="sm"
              id="rating-1"
              className={`h-[32px] w-[40px] rounded p-0 hover:bg-woh-white ${
                rating === 1 || rating === 0 ? "bg-woh-white" : "bg-gray"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRating((prev) => (prev === 1 ? 0 : 1));
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5132 22.2121C18.1777 22.2121 22.7697 17.8706 22.7697 12.5151C22.7697 7.15966 18.1777 2.81818 12.5132 2.81818C6.84879 2.81818 2.25684 7.15966 2.25684 12.5151C2.25684 17.8706 6.84879 22.2121 12.5132 22.2121Z"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5898 9.60606H15.6001"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.43555 9.60606H9.4458"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.41016 16.3699C13.0255 12.0603 16.6153 16.3699 16.6153 16.3699"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.6787 7.319C15.6962 8.29672 16.3397 8.43216 17.6623 8.02995"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeLinecap="round"
                />
                <path
                  d="M7.36328 8.03918C8.75202 8.43604 9.38537 8.26327 10.3422 7.31081"
                  stroke={rating === 1 || rating === 0 ? "#C41C11" : "#C5C5C5"}
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              id="rating-2"
              className={`h-[32px] w-[40px] rounded p-0 hover:bg-woh-white ${
                rating === 2 || rating === 0 ? "bg-woh-white" : "bg-gray"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRating((prev) => (prev === 2 ? 0 : 2));
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5132 22.2121C18.1777 22.2121 22.7697 17.8706 22.7697 12.5151C22.7697 7.15966 18.1777 2.81818 12.5132 2.81818C6.84879 2.81818 2.25684 7.15966 2.25684 12.5151C2.25684 17.8706 6.84879 22.2121 12.5132 22.2121Z"
                  stroke={rating === 2 || rating === 0 ? "#F1812F" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5898 9.60606H15.6001"
                  stroke={rating === 2 || rating === 0 ? "#F1812F" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.43555 9.60606H9.4458"
                  stroke={rating === 2 || rating === 0 ? "#F1812F" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.41016 16.3699C13.0255 12.0603 16.6153 16.3699 16.6153 16.3699"
                  stroke={rating === 2 || rating === 0 ? "#F1812F" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              id="rating-3"
              className={`h-[32px] w-[40px] rounded p-0 hover:bg-woh-white ${
                rating === 3 || rating === 0 ? "bg-woh-white" : "bg-gray"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRating((prev) => (prev === 3 ? 0 : 3));
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5132 22.2121C18.1777 22.2121 22.7697 17.8706 22.7697 12.5151C22.7697 7.15966 18.1777 2.81818 12.5132 2.81818C6.84879 2.81818 2.25684 7.15966 2.25684 12.5151C2.25684 17.8706 6.84879 22.2121 12.5132 22.2121Z"
                  stroke={rating === 3 || rating === 0 ? "#F7D210" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5898 9.60606H15.6001"
                  stroke={rating === 3 || rating === 0 ? "#F7D210" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.43555 9.60606H9.4458"
                  stroke={rating === 3 || rating === 0 ? "#F7D210" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.41016 15.4241H16.6153"
                  stroke={rating === 3 || rating === 0 ? "#F7D210" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              id="rating-4"
              className={`h-[32px] w-[40px] rounded p-0 hover:bg-woh-white ${
                rating === 4 || rating === 0 ? "bg-woh-white" : "bg-gray"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRating((prev) => (prev === 4 ? 0 : 4));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="hover:stroke-white"
              >
                <path
                  d="M12.5132 22.2121C18.1777 22.2121 22.7697 17.8706 22.7697 12.5151C22.7697 7.15966 18.1777 2.81818 12.5132 2.81818C6.84879 2.81818 2.25684 7.15966 2.25684 12.5151C2.25684 17.8706 6.84879 22.2121 12.5132 22.2121Z"
                  stroke={rating === 4 || rating === 0 ? "#91D936" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.41016 14.4545C8.41016 14.4545 9.94862 16.3939 12.5127 16.3939C15.0768 16.3939 16.6153 14.4545 16.6153 14.4545"
                  stroke={rating === 4 || rating === 0 ? "#91D936" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5898 9.60606H15.6001"
                  stroke={rating === 4 || rating === 0 ? "#91D936" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.43555 9.60606H9.4458"
                  stroke={rating === 4 || rating === 0 ? "#91D936" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              id="rating-5"
              className={`h-[32px] w-[40px] rounded p-0 hover:bg-woh-white ${
                rating === 5 || rating === 0 ? "bg-woh-white" : "bg-gray"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRating((prev) => (prev === 5 ? 0 : 5));
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5132 22.2121C18.1777 22.2121 22.7697 17.8706 22.7697 12.5151C22.7697 7.15966 18.1777 2.81818 12.5132 2.81818C6.84879 2.81818 2.25684 7.15966 2.25684 12.5151C2.25684 17.8706 6.84879 22.2121 12.5132 22.2121Z"
                  stroke={rating === 5 || rating === 0 ? "#3FC411" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5898 9.60606H15.6001"
                  stroke={rating === 5 || rating === 0 ? "#3FC411" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.43555 9.60606H9.4458"
                  stroke={rating === 5 || rating === 0 ? "#3FC411" : "#C5C5C5"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.6412 13.4847C17.6412 14.1214 17.5085 14.7519 17.2508 15.3402C16.9931 15.9284 16.6154 16.4629 16.1392 16.9131C15.663 17.3634 15.0976 17.7205 14.4755 17.9641C13.8533 18.2078 13.1864 18.3332 12.513 18.3332C11.8395 18.3332 11.1727 18.2078 10.5505 17.9641C9.92831 17.7205 9.36298 17.3634 8.88678 16.9131C8.41058 16.4629 8.03284 15.9284 7.77513 15.3402C7.51741 14.7519 7.38477 14.1214 7.38477 13.4847L12.513 13.4847H17.6412Z"
                  fill={rating === 5 || rating === 0 ? "#3FC411" : "#C5C5C5"}
                />
              </svg>
            </Button>
          </div>
          <div className="z-10 mt-[10px] flex w-full justify-between px-14 text-center">
            <p className="text-xs text-woh-white">ไม่พอใจเลย</p>
            <p className="text-xs text-woh-white">แฮปปี้สุด ๆ</p>
          </div>
          <div className="z-10 mt-[17px] h-[1px] w-[282px] border border-woh-white"></div>
          <div className="z-10 mt-[26px] text-center ">
            <label className="text-base text-woh-white" htmlFor="feedback-text">
              มีอะไรอยากบอก/แนะนำเราเพิ่มมั้ย
            </label>
            <textarea
              id="feedback-text"
              className="z-10 mt-5 h-[120px] w-[282px] rounded-sm bg-woh-white p-4 "
              placeholder="โปรดพิมพ์คำตอบของคุณ"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="z-10 mt-[20px] text-center">
            <Button
              size="sm"
              className=" h-[50px] w-[282px]"
              type="submit"
              disabled={isSubmitting}
            >
              <p className="text-2xl font-semibold">ส่งคำตอบ</p>
            </Button>{" "}
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
