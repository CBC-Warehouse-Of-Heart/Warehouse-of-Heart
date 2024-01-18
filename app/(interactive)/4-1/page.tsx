"use client";

import { useRouter } from 'next/navigation'
export default function Page() {
  const router = useRouter()
  return (
    <div className='h-full'>
    <div className="ml-[87px] mt-[232px] mr-[24px]" onClick={() => router.push('/4-2')}>
      <p>"ทำไมถึงมาอยู่ตรงนี้กันนะ</p>
      <p className="mt-[12px] text-center">ไม่ได้เห็นมันมานานเลย..."</p>
    </div>
    </div>
  );
}



