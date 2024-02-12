<<<<<<< HEAD
export default function page() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center"></div>
  );
}
=======
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
>>>>>>> feat/4-10_to_4-14
