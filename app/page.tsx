import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 sm:flex-row">
      <Button>พร้อมแล้ว</Button>
      <Button variant="secondary">ยังไม่แน่ใจ</Button>
      <Button className="font-serif">Register</Button>
    </div>
  );
}
