"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { useRouter } from "@/lib/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("5-5");
    }, backgroundMapConfig["5-5"].stopMotionDuration * backgroundMapConfig["5-5"].image.length);
  });

  return <div />;
};

export default Page;