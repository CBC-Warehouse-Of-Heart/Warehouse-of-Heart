import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-10 sm:flex-row">
      <Button>พร้อมแล้ว</Button>
      <Button variant="secondary" className="">
        ยังไม่แน่ใจ
      </Button>
      <Button className="font-serif">Register</Button>
    </div>
  );
}
