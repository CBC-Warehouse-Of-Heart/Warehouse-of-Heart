"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { useRouter } from "@/lib/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("4-14");
    }, backgroundMapConfig["4-13"].stopMotionDuration * backgroundMapConfig["4-13"].image.length);
  });

  return <div />;
};

export default Page;
