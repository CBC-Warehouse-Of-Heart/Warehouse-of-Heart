'use client'
import { useRouter } from "next/navigation";
export default function Page2_1() {
const router = useRouter()
  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      onClick={() => router.push('/2-1a')}
    >
      <div className="fixed text-center text-xl">
        <p>
          ในที่สุดก็หมดวันแล้ว
          <br />
          วันนี้เป็นวันที่แสนยาวนาน...
        </p>
      </div>
      <div className="text-center text-sm mt-56">
        <p>กดที่หน้าจอเพื่อไปต่อ</p>
      </div>
    </div>
  );
}
