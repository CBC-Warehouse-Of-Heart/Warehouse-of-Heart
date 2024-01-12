import NextButton from "@/components/ui/nextButton";
import Link from "next/link";
export default function Page2_1() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="fixed text-center text-xl">
        <p>
          ในที่สุดก็หมดวันแล้ว
          <br />
          วันนี้เป็นวันที่แสนยาวนาน...
        </p>
      </div>
      <div className="mt-56 text-center text-sm">
        <Link href="/2-1a">
          <NextButton />
        </Link>
      </div>
    </div>
  );
}
