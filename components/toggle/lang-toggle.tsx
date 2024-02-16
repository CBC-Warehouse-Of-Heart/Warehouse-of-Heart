"use client";

import { Link, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { Button } from "../ui/button";

const interFont = Inter({
  weight: "600",
  subsets: ["greek"],
});

const LangToggle = () => {
  const locale = useLocale();
  const path = usePathname();
  return (
    <Link href={path} locale={locale === "en" ? "th" : "en"}>
      <Button
        variant="ghost"
        className={cn(
          interFont.className,
          "h-auto w-auto rounded-sm p-2 text-sm font-semibold text-accent",
        )}
      >
        {locale === "en" ? "EN" : "TH"}
      </Button>
    </Link>
  );
};

export default LangToggle;
