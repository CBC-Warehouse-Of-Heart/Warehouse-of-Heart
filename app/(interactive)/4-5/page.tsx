'use client'
import React from 'react'
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/4-6')} className="ml-[87px] mt-[232px]">
      <p>มีทั้งเรื่องที่อยากให้เกิดขึ้น</p>
      <p className="mt-3 text-center">เรื่องที่ไม่อยากให้เกิดขึ้น...</p>
    </div>
  )
}