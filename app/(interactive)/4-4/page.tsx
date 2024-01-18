"use client";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/4-5')} className="ml-[36px] mt-[152px]">
      <p>ในชีวิตมีเรื่องราวเกิดขึ้นมากมาย</p>
    </div>
  )
}
