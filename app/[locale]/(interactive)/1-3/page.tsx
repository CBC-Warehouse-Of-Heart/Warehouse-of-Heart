"use client"
import { useRouter } from 'next/navigation'

type Props = {};

const Page = (props: Props) => {
  const router = useRouter()
  return (
    <div className='flex h-full w-full flex-col items-center justify-center' onClick={() => router.push('/1-4')}>

      <div className='flex flex-col items-center text-center text-[21px] text-[#F8F8F7] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-relaxed'>
        <p>อาจจะมีการขุดคุ้ยสิ่งที่<br/>ส่งผลกับใจของเธอได้นะ</p>
      </div>

      <p className="fixed bottom-36 text-[#F8F8F7] text-[15px]">กดที่หน้าจอเพื่อไปต่อ</p>

    </div>
  );
};

export default Page;
