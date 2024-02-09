"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { useRouter } from "@/lib/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("4-10");
    }, backgroundMapConfig["4-9"].stopMotionDuration * backgroundMapConfig["4-9"].image.length);
  });

  return <div />;
};

export default Page;
