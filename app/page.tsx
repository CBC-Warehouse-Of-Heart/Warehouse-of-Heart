import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center space-x-10">
      <Button>พร้อมแล้ว</Button>
      <Button variant="secondary">ยังไม่แน่ใจ</Button>
      <Button className="font-serif">Register</Button>
    </div>
  );
}
