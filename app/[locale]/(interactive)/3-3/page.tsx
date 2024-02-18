"use client";
import { backgroundMapConfig } from "@/lib/bg-config";
import { useRouter } from "@/lib/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("3-4");
    }, backgroundMapConfig["3-3"].stopMotionDuration * backgroundMapConfig["3-3"].image.length);
  });

  return <div />;
};

export default Page;