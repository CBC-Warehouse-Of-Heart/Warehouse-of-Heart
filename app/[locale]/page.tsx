import { Button } from "@/components/ui/button";
import { redirect } from "@/lib/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  redirect("/1-1");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 sm:flex-row">
      <Button variant="secondary">ยังไม่แน่ใจ</Button>
      <Button>Register</Button>
    </div>
  );
}
