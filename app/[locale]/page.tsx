import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 sm:flex-row">
      <Button>{t("title")}</Button>
      <Button variant="secondary">ยังไม่แน่ใจ</Button>
      <Button className="font-serif">Register</Button>
    </div>
  );
}
